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
                db.collection('jewelry').find( {}, {} ).toArray( ( err, res ) => {
                    if ( err ) throw err;
                    cb( null, res );
                    db.close();
                })
            }
		], ( err,result ) => {
			if ( err ) throw err;
			var len = result.length;
			res.render('jewelry', {
				len,
				result
			});
		})  
	},
	addJewelryRoute: ( req, res, next ) => {
		res.render('jewelry_add');
	},
	addJewelryAction: ( req, res, next ) => {
		var insertObj = req.body;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'jewelry').insert( insertObj, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.redirect( '/jewelryRoute' );
			}
		})
	},
	delJewelryRoute: ( req, res, next ) => {
		var { id } = url.parse( req.url, true ).query;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'jewelry' ).deleteMany( { id: id }, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.redirect( '/jewelryRoute' );
			}
		})
	},
	updateJewelryRoute: ( req, res, nex ) => {
		var { id } = url.parse( req.url, true ).query;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection( 'jewelry' ).find( {id: id}, {} ).toArray( (err, res ) => {
					if ( err ) throw err;
					cb( null, res );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			var { id, brand, price, img, info } = result[0];
			res.render( 'jewelry_update', {
				id,
				brand,
				price,
				img,
				info
			} );			
		})
	},
	updateJewelryAction: ( req, res, nex ) => {
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
				db.collection( 'jewelry').updateMany( whereObj, updateObj, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
                res.redirect( '/jewelryRoute' );
			}
		})
	}
}
