var orderModel = require('../lib/model/order');
var orderError = require('../lib/error/orderError');

//listOrders

//previewEquityOrders
//placeEquityOrders
//placeEquityOrderChange    

//previewOptionOrder
//placeOptionOrder
//previewOptionOrderChange
//placeOptionOrderChange
//cancelOrder

exports.productlookup = function (req, res){
	if(req.query && req.query.company && req.query.type){
		orderModel.lookupProduct(function(result){
			if(global.debug) {result.query = req.query;}
			res.json(result);
		}, req.query.company, req.query.type);
	}
	else{
		res.json({success: false, error: orderError.paramsmissing});
	}	
}

exports.getQuote = function (req, res){
	if(req.query && req.query.symbol){
		orderModel.getQuote(function(result){
			if(global.debug) {result.query = req.query;}
			res.json(result);
		}, req.query.symbol, req.query.detailFlag);
	}
	else{
		res.json({success: false, error: orderError.paramsmissing});
	}	
}
