var url = require('url');
var async = require('async');
var { MongoClient } = require('mongodb');
var { sendCode } = require('./mycode.js');

var mongourl = 'mongodb://localhost:27017/CNR';

module.exports = {	
	getRegisterPhoneCode : ( req, res, next ) => {
		var {phoneNum} = url.parse( req.url, true ).query;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				} )
			},
			( db, cb ) => {
				db.collection( 'user' ).find( {phoneNum}, {} ).toArray( ( err, res ) => {
					if ( err ) throw err;
					if ( res.length == 0 ) {
						cb( null, 1 );//未被注册
					} else {
						cb( null, 0 );//已被注册
					}
					db.close();
				} )
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == '1' ) {
				sendCode({
		            phoneNum,
		            code:'1234',
		            success:function(data){
			            if(data == "ok"){
				              res.send({
				                state:1,
				                code: '1234'
				              })
			            }
			        }
		       })		            
			}else{
				res.send('0');
			}
		} )
	},
	addRegisterPhoneAction: ( req, res, next ) => {		
		var { phoneNum, password } = req.body;p
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection('user').insert( {phoneNum, password }, ( err, res ) => {
					if ( err ) throw err;
					cb( null, 'ok' );
					db.close();
				} )
			}
		], ( err, result ) => {
			if ( err ) throw err;
			if ( result == 'ok' ) {
				res.send('1');
			} else {
				res.send('0');
			}
		})
	},
	getLoginMsg: ( req, res, next ) => {
		var { phoneNum } = url.parse( req.url, true ).query;
		async.waterfall( [
			( cb ) => {
				MongoClient.connect( mongourl, ( err, db ) => {
					if ( err ) throw err;
					cb( null, db );
				})
			},
			( db, cb ) => {
				db.collection('user').find( {phoneNum}, {} ).toArray( ( err, res ) => {
					if ( err ) throw err;
					cb( null, res );
					db.close();
				})
			}
		], ( err, result ) => {
			if ( err ) throw err;
			res.send(result[0]);
		})
	}

}