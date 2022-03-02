export var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["RUNNING_CHECKS"] = 0] = "RUNNING_CHECKS";
    OrderStatus[OrderStatus["PROCESSING"] = 1] = "PROCESSING";
    OrderStatus[OrderStatus["FAILED"] = 2] = "FAILED";
    OrderStatus[OrderStatus["COMPLETE"] = 3] = "COMPLETE";
})(OrderStatus || (OrderStatus = {}));
