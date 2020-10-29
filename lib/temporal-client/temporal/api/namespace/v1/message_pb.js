/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var dependencies_gogoproto_gogo_pb = require('../../../../dependencies/gogoproto/gogo_pb.js');
var temporal_api_enums_v1_namespace_pb = require('../../../../temporal/api/enums/v1/namespace_pb.js');
goog.exportSymbol('proto.temporal.api.namespace.v1.BadBinaries', null, global);
goog.exportSymbol('proto.temporal.api.namespace.v1.BadBinaryInfo', null, global);
goog.exportSymbol('proto.temporal.api.namespace.v1.NamespaceConfig', null, global);
goog.exportSymbol('proto.temporal.api.namespace.v1.NamespaceInfo', null, global);
goog.exportSymbol('proto.temporal.api.namespace.v1.UpdateNamespaceInfo', null, global);

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
proto.temporal.api.namespace.v1.NamespaceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.namespace.v1.NamespaceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.namespace.v1.NamespaceInfo.displayName = 'proto.temporal.api.namespace.v1.NamespaceInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.namespace.v1.NamespaceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.namespace.v1.NamespaceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.NamespaceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    state: jspb.Message.getFieldWithDefault(msg, 2, 0),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    ownerEmail: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, undefined) : [],
    id: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.temporal.api.namespace.v1.NamespaceInfo}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.namespace.v1.NamespaceInfo;
  return proto.temporal.api.namespace.v1.NamespaceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.namespace.v1.NamespaceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.namespace.v1.NamespaceInfo}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {!proto.temporal.api.enums.v1.NamespaceState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerEmail(value);
      break;
    case 5:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.namespace.v1.NamespaceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.namespace.v1.NamespaceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.NamespaceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(5, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional temporal.api.enums.v1.NamespaceState state = 2;
 * @return {!proto.temporal.api.enums.v1.NamespaceState}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getState = function() {
  return /** @type {!proto.temporal.api.enums.v1.NamespaceState} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {!proto.temporal.api.enums.v1.NamespaceState} value */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.setState = function(value) {
  jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string owner_email = 4;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getOwnerEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.setOwnerEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * map<string, string> data = 5;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 5, opt_noLazyCreate,
      null));
};


proto.temporal.api.namespace.v1.NamespaceInfo.prototype.clearDataMap = function() {
  this.getDataMap().clear();
};


/**
 * optional string id = 6;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceInfo.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



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
proto.temporal.api.namespace.v1.NamespaceConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.namespace.v1.NamespaceConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.namespace.v1.NamespaceConfig.displayName = 'proto.temporal.api.namespace.v1.NamespaceConfig';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.namespace.v1.NamespaceConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.namespace.v1.NamespaceConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.NamespaceConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowExecutionRetentionTtl: (f = msg.getWorkflowExecutionRetentionTtl()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    badBinaries: (f = msg.getBadBinaries()) && proto.temporal.api.namespace.v1.BadBinaries.toObject(includeInstance, f),
    historyArchivalState: jspb.Message.getFieldWithDefault(msg, 3, 0),
    historyArchivalUri: jspb.Message.getFieldWithDefault(msg, 4, ""),
    visibilityArchivalState: jspb.Message.getFieldWithDefault(msg, 5, 0),
    visibilityArchivalUri: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.temporal.api.namespace.v1.NamespaceConfig}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.namespace.v1.NamespaceConfig;
  return proto.temporal.api.namespace.v1.NamespaceConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.namespace.v1.NamespaceConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.namespace.v1.NamespaceConfig}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setWorkflowExecutionRetentionTtl(value);
      break;
    case 2:
      var value = new proto.temporal.api.namespace.v1.BadBinaries;
      reader.readMessage(value,proto.temporal.api.namespace.v1.BadBinaries.deserializeBinaryFromReader);
      msg.setBadBinaries(value);
      break;
    case 3:
      var value = /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (reader.readEnum());
      msg.setHistoryArchivalState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHistoryArchivalUri(value);
      break;
    case 5:
      var value = /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (reader.readEnum());
      msg.setVisibilityArchivalState(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisibilityArchivalUri(value);
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
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.namespace.v1.NamespaceConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.namespace.v1.NamespaceConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.NamespaceConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowExecutionRetentionTtl();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getBadBinaries();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.temporal.api.namespace.v1.BadBinaries.serializeBinaryToWriter
    );
  }
  f = message.getHistoryArchivalState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getHistoryArchivalUri();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVisibilityArchivalState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getVisibilityArchivalUri();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration workflow_execution_retention_ttl = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getWorkflowExecutionRetentionTtl = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/** @param {?proto.google.protobuf.Duration|undefined} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setWorkflowExecutionRetentionTtl = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.temporal.api.namespace.v1.NamespaceConfig.prototype.clearWorkflowExecutionRetentionTtl = function() {
  this.setWorkflowExecutionRetentionTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.hasWorkflowExecutionRetentionTtl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional BadBinaries bad_binaries = 2;
 * @return {?proto.temporal.api.namespace.v1.BadBinaries}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getBadBinaries = function() {
  return /** @type{?proto.temporal.api.namespace.v1.BadBinaries} */ (
    jspb.Message.getWrapperField(this, proto.temporal.api.namespace.v1.BadBinaries, 2));
};


/** @param {?proto.temporal.api.namespace.v1.BadBinaries|undefined} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setBadBinaries = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.temporal.api.namespace.v1.NamespaceConfig.prototype.clearBadBinaries = function() {
  this.setBadBinaries(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.hasBadBinaries = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional temporal.api.enums.v1.ArchivalState history_archival_state = 3;
 * @return {!proto.temporal.api.enums.v1.ArchivalState}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getHistoryArchivalState = function() {
  return /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {!proto.temporal.api.enums.v1.ArchivalState} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setHistoryArchivalState = function(value) {
  jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string history_archival_uri = 4;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getHistoryArchivalUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setHistoryArchivalUri = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional temporal.api.enums.v1.ArchivalState visibility_archival_state = 5;
 * @return {!proto.temporal.api.enums.v1.ArchivalState}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getVisibilityArchivalState = function() {
  return /** @type {!proto.temporal.api.enums.v1.ArchivalState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.temporal.api.enums.v1.ArchivalState} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setVisibilityArchivalState = function(value) {
  jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string visibility_archival_uri = 6;
 * @return {string}
 */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.getVisibilityArchivalUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.NamespaceConfig.prototype.setVisibilityArchivalUri = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



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
proto.temporal.api.namespace.v1.BadBinaries = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.namespace.v1.BadBinaries, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.namespace.v1.BadBinaries.displayName = 'proto.temporal.api.namespace.v1.BadBinaries';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.namespace.v1.BadBinaries.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.namespace.v1.BadBinaries.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.namespace.v1.BadBinaries} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.BadBinaries.toObject = function(includeInstance, msg) {
  var f, obj = {
    binariesMap: (f = msg.getBinariesMap()) ? f.toObject(includeInstance, proto.temporal.api.namespace.v1.BadBinaryInfo.toObject) : []
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
 * @return {!proto.temporal.api.namespace.v1.BadBinaries}
 */
proto.temporal.api.namespace.v1.BadBinaries.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.namespace.v1.BadBinaries;
  return proto.temporal.api.namespace.v1.BadBinaries.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.namespace.v1.BadBinaries} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.namespace.v1.BadBinaries}
 */
proto.temporal.api.namespace.v1.BadBinaries.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getBinariesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.temporal.api.namespace.v1.BadBinaryInfo.deserializeBinaryFromReader, "");
         });
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
proto.temporal.api.namespace.v1.BadBinaries.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.namespace.v1.BadBinaries.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.namespace.v1.BadBinaries} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.BadBinaries.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBinariesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.temporal.api.namespace.v1.BadBinaryInfo.serializeBinaryToWriter);
  }
};


/**
 * map<string, BadBinaryInfo> binaries = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.temporal.api.namespace.v1.BadBinaryInfo>}
 */
proto.temporal.api.namespace.v1.BadBinaries.prototype.getBinariesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.temporal.api.namespace.v1.BadBinaryInfo>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.temporal.api.namespace.v1.BadBinaryInfo));
};


proto.temporal.api.namespace.v1.BadBinaries.prototype.clearBinariesMap = function() {
  this.getBinariesMap().clear();
};



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
proto.temporal.api.namespace.v1.BadBinaryInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.namespace.v1.BadBinaryInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.namespace.v1.BadBinaryInfo.displayName = 'proto.temporal.api.namespace.v1.BadBinaryInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.namespace.v1.BadBinaryInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.namespace.v1.BadBinaryInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    reason: jspb.Message.getFieldWithDefault(msg, 1, ""),
    operator: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createTime: (f = msg.getCreateTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.temporal.api.namespace.v1.BadBinaryInfo}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.namespace.v1.BadBinaryInfo;
  return proto.temporal.api.namespace.v1.BadBinaryInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.namespace.v1.BadBinaryInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.namespace.v1.BadBinaryInfo}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReason(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreateTime(value);
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
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.namespace.v1.BadBinaryInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.namespace.v1.BadBinaryInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreateTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string reason = 1;
 * @return {string}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.setReason = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.setOperator = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp create_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.getCreateTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/** @param {?proto.google.protobuf.Timestamp|undefined} value */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.setCreateTime = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.clearCreateTime = function() {
  this.setCreateTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.temporal.api.namespace.v1.BadBinaryInfo.prototype.hasCreateTime = function() {
  return jspb.Message.getField(this, 3) != null;
};



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
proto.temporal.api.namespace.v1.UpdateNamespaceInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.temporal.api.namespace.v1.UpdateNamespaceInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.temporal.api.namespace.v1.UpdateNamespaceInfo.displayName = 'proto.temporal.api.namespace.v1.UpdateNamespaceInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.temporal.api.namespace.v1.UpdateNamespaceInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.temporal.api.namespace.v1.UpdateNamespaceInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    description: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ownerEmail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dataMap: (f = msg.getDataMap()) ? f.toObject(includeInstance, undefined) : []
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
 * @return {!proto.temporal.api.namespace.v1.UpdateNamespaceInfo}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.temporal.api.namespace.v1.UpdateNamespaceInfo;
  return proto.temporal.api.namespace.v1.UpdateNamespaceInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.temporal.api.namespace.v1.UpdateNamespaceInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.temporal.api.namespace.v1.UpdateNamespaceInfo}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnerEmail(value);
      break;
    case 3:
      var value = msg.getDataMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "");
         });
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
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.temporal.api.namespace.v1.UpdateNamespaceInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.temporal.api.namespace.v1.UpdateNamespaceInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOwnerEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDataMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string description = 1;
 * @return {string}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string owner_email = 2;
 * @return {string}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.getOwnerEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.setOwnerEmail = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, string> data = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.getDataMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      null));
};


proto.temporal.api.namespace.v1.UpdateNamespaceInfo.prototype.clearDataMap = function() {
  this.getDataMap().clear();
};


goog.object.extend(exports, proto.temporal.api.namespace.v1);