var url = require('url');
var async = require('async');
var { MongoClient } = require('mongodb');

var mongourl = 'mongodb://localhost:27017/CNR';

module.exports = {
	defaultRoute : (req, res, next) => {
	   res.render('login')
	},
	adminLoginAction : ( req, res, next ) => {
		var{ username, password } = req.body;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				} )
			},
			( db, cb ) => {
				db.collection( 'admin' ).find( { username, password }, {} ).toArray( ( err, res ) => {
					if ( err ) throw err;
					if ( res.length > 0 ) {
						cb( null, 1 );
					} else {
						cb( null, 0 );
					}
					db.close();
				} )
			}
		], ( err, result ) => {
			if ( err ) throw err;
			 if ( result == 1){ //登录成功
                res.cookie('loginStatus', 1);//设置前端cookie
                res.redirect('/');
            } else {
                res.cookie('loginStatus', 0);
                res.redirect('/');
            }
		} )
	},
	adminOutRoute : ( req, res, next ) => {
		res.redirect( '/adminRoute' );
	}
}