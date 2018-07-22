var url = require('url');
var async = require('async');
var { MongoClient } = require('mongodb');

var mongourl = 'mongodb://localhost:27017/CNR';

module.exports ={
	defaultRoute : (req, res, next) => {
		async.waterfall( [
            ( cb ) => {
                MongoClient.connect( mongourl, ( err, db ) => {
                    if ( err ) throw err;
                    cb( null, db );
                })
            },
            ( db, cb ) => {
                db.collection('watch').find( {}, {} ).toArray( ( err, res ) => {
                    if ( err ) throw err;
                    cb( null, res );
                    db.close();
                })
            }
		], ( err,result ) => {
			if ( err ) throw err;
			res.send(result);
		})  
	},
	addwatchRoute: ( req, res, next ) => {
		res.render('watch_add');
	},
	addwatchAction: ( req, res, next ) => {
		var insertObj = req.body;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'watch').insert( insertObj, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.redirect( '/watchRoute' );
			}
		})
	},
	delwatchRoute: ( req, res, next ) => {
		var { id } = url.parse( req.url, true ).query;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'watch' ).deleteMany( { id: id }, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.redirect( '/watchRoute' );
			}
		})
	},
	updatewatchRoute: ( req, res, nex ) => {
		var { id } = url.parse( req.url, true ).query;
		console.log(id)
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'watch' ).find( {id: id}, {} ).toArray( (err, res ) => {
					if ( err ) throw err;
					cb( null, res );
					console.log(res)
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			var {  brand, price, img, info } = result[0];
			res.render( 'watch_update', {
				id,
				brand,
				price,
				img,
				info
			} );			
		})
	},
	updatewatchAction: ( req, res, nex ) => {
		var { id, brand, price, img, info } = req.body;
		var whereObj = {id: id};
		var updateObj = {
			$set: {
				id,
				brand,
				price,
				img,
				info
			}
		}
		console.log(updateObj);
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'watch').updateMany( whereObj, updateObj, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
                res.redirect( '/watchRoute' );
			}
		})
	}
}
