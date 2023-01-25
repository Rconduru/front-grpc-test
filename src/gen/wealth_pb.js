// source: wealth.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.pomwm.wealth.Wealth', null, global);
goog.exportSymbol('proto.pomwm.wealth.Wealth.GetResumeRequest', null, global);
goog.exportSymbol('proto.pomwm.wealth.Wealth.GetResumeResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pomwm.wealth.Wealth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pomwm.wealth.Wealth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pomwm.wealth.Wealth.displayName = 'proto.pomwm.wealth.Wealth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pomwm.wealth.Wealth.GetResumeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pomwm.wealth.Wealth.GetResumeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pomwm.wealth.Wealth.GetResumeRequest.displayName = 'proto.pomwm.wealth.Wealth.GetResumeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pomwm.wealth.Wealth.GetResumeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pomwm.wealth.Wealth.GetResumeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pomwm.wealth.Wealth.GetResumeResponse.displayName = 'proto.pomwm.wealth.Wealth.GetResumeResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pomwm.wealth.Wealth.prototype.toObject = function(opt_includeInstance) {
  return proto.pomwm.wealth.Wealth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pomwm.wealth.Wealth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pomwm.wealth.Wealth}
 */
proto.pomwm.wealth.Wealth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pomwm.wealth.Wealth;
  return proto.pomwm.wealth.Wealth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pomwm.wealth.Wealth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pomwm.wealth.Wealth}
 */
proto.pomwm.wealth.Wealth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pomwm.wealth.Wealth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pomwm.wealth.Wealth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pomwm.wealth.Wealth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pomwm.wealth.Wealth.GetResumeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pomwm.wealth.Wealth.GetResumeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idUser: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pomwm.wealth.Wealth.GetResumeRequest}
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pomwm.wealth.Wealth.GetResumeRequest;
  return proto.pomwm.wealth.Wealth.GetResumeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pomwm.wealth.Wealth.GetResumeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pomwm.wealth.Wealth.GetResumeRequest}
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pomwm.wealth.Wealth.GetResumeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pomwm.wealth.Wealth.GetResumeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdUser();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id_user = 1;
 * @return {string}
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.prototype.getIdUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pomwm.wealth.Wealth.GetResumeRequest} returns this
 */
proto.pomwm.wealth.Wealth.GetResumeRequest.prototype.setIdUser = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pomwm.wealth.Wealth.GetResumeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pomwm.wealth.Wealth.GetResumeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    goodsAndRights: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    debitsAndObligation: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    liquidValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pomwm.wealth.Wealth.GetResumeResponse}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pomwm.wealth.Wealth.GetResumeResponse;
  return proto.pomwm.wealth.Wealth.GetResumeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pomwm.wealth.Wealth.GetResumeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pomwm.wealth.Wealth.GetResumeResponse}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setGoodsAndRights(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDebitsAndObligation(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLiquidValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pomwm.wealth.Wealth.GetResumeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pomwm.wealth.Wealth.GetResumeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGoodsAndRights();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getDebitsAndObligation();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getLiquidValue();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
};


/**
 * optional double goods_and_rights = 1;
 * @return {number}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.getGoodsAndRights = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pomwm.wealth.Wealth.GetResumeResponse} returns this
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.setGoodsAndRights = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional double debits_and_obligation = 2;
 * @return {number}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.getDebitsAndObligation = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pomwm.wealth.Wealth.GetResumeResponse} returns this
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.setDebitsAndObligation = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional double liquid_value = 3;
 * @return {number}
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.getLiquidValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pomwm.wealth.Wealth.GetResumeResponse} returns this
 */
proto.pomwm.wealth.Wealth.GetResumeResponse.prototype.setLiquidValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


goog.object.extend(exports, proto.pomwm.wealth);