import * as jspb from 'google-protobuf'



export class Wealth extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wealth.AsObject;
  static toObject(includeInstance: boolean, msg: Wealth): Wealth.AsObject;
  static serializeBinaryToWriter(message: Wealth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wealth;
  static deserializeBinaryFromReader(message: Wealth, reader: jspb.BinaryReader): Wealth;
}

export namespace Wealth {
  export type AsObject = {
  }

  export class GetResumeRequest extends jspb.Message {
    getIdUser(): string;
    setIdUser(value: string): GetResumeRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResumeRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetResumeRequest): GetResumeRequest.AsObject;
    static serializeBinaryToWriter(message: GetResumeRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResumeRequest;
    static deserializeBinaryFromReader(message: GetResumeRequest, reader: jspb.BinaryReader): GetResumeRequest;
  }

  export namespace GetResumeRequest {
    export type AsObject = {
      idUser: string,
    }
  }


  export class GetResumeResponse extends jspb.Message {
    getGoodsAndRights(): number;
    setGoodsAndRights(value: number): GetResumeResponse;

    getDebitsAndObligation(): number;
    setDebitsAndObligation(value: number): GetResumeResponse;

    getLiquidValue(): number;
    setLiquidValue(value: number): GetResumeResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetResumeResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetResumeResponse): GetResumeResponse.AsObject;
    static serializeBinaryToWriter(message: GetResumeResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetResumeResponse;
    static deserializeBinaryFromReader(message: GetResumeResponse, reader: jspb.BinaryReader): GetResumeResponse;
  }

  export namespace GetResumeResponse {
    export type AsObject = {
      goodsAndRights: number,
      debitsAndObligation: number,
      liquidValue: number,
    }
  }

}

