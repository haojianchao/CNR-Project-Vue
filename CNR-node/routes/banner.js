var url = require( 'url' );
var fs = require ( 'fs' );

var async = require( 'async' );
var { MongoClient } = require( 'mongodb' )

var mongourl = 'mongodb://localhost:27017/CNR';

module.exports = {
	defaultRoute : (req, res, next) => {
	    async.waterfall( [
            ( cb ) => {
	            MongoClient.connect( mongourl, ( err, db ) => {
	                if ( err ) throw err;
	                cb( null, db );
                })
            },
            ( db, cb ) => {
	            db.collection( 'banner' ).find( {}, {} ).toArray( ( err, res ) => {
	                if ( err ) throw err;
	                cb( null, res );
	                db.close();
                })
            }
        ], ( err, result ) => {
	        var len = result.length;
            res.render( 'banner', {
                result,
                len
            })
        })

	},
    bannerAddRoute : ( req, res, next ) => {
        res.render('banner_add')
	},
    bannerAddAction : ( req, res, next ) => {
        //console.log( req.file )
        //console.log( req.body );
        // { fieldname: 'bannerImg',
        //     originalname: '508669fb75a1a.jpg',
        //     encoding: '7bit',
        //     mimetype: 'image/jpeg',
        //     destination: 'uploads/',
        //     filename: 'f387a4e22ac2fcbb5f963b962e58570d',
        //     path: 'uploads\\f387a4e22ac2fcbb5f963b962e58570d',
        //     size: 101889 }
        // { bannerId: '180304', bannerUrl: 'http://www.baidu.com' }
        //http://localhost:6500/f387a4e22ac2fcbb5f963b962e58570d
        //var bannerImg = "http://127.0.0.1:5500/" + req.file.filename + "." + req.file.mimetype.split('/')[1];
        
        var bannerUrl = req.file.filename + "." + req.file.mimetype.split('/')[1];
        var oldname = "./uploads/" + req.file.filename;
        var newname = "./uploads/" + bannerUrl;
        async.waterfall( [
            ( cb ) => {
                fs.rename( oldname, newname, ( err ) => {
                    if ( err ) throw err;
                    cb( null, bannerUrl );
                } )
            },
            ( bannerUrl, cb ) => {
                MongoClient.connect( mongourl, ( err, db ) => {
                    if ( err ) throw err;
                    cb( null, bannerUrl, db );
                } )
            },
            ( bannerUrl, db, cb ) => {
                var { bannerId } = req.body;
                var insertObj = {
                    bannerId,
                    bannerUrl
                };
                db.collection( 'banner' ).insert( insertObj, ( err, res ) => {
                    if ( err ) throw err;
                    cb( null, 'ok' );
                    db.close();
                } )
            }
        ], ( err, result ) => {
            if ( err ) throw err;
            if ( result == 'ok' ) {
                res.redirect('/bannerRoute')
            }
        } )
    }
}