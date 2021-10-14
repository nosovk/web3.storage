/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/aggregate": {
    get: {
      parameters: {
        query: {
          aggregate_cid?: parameters["rowFilter.aggregate.aggregate_cid"];
          piece_cid?: parameters["rowFilter.aggregate.piece_cid"];
          sha256hex?: parameters["rowFilter.aggregate.sha256hex"];
          export_size?: parameters["rowFilter.aggregate.export_size"];
          metadata?: parameters["rowFilter.aggregate.metadata"];
          entry_created?: parameters["rowFilter.aggregate.entry_created"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["aggregate"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  "/aggregate_entry": {
    get: {
      parameters: {
        query: {
          aggregate_cid?: parameters["rowFilter.aggregate_entry.aggregate_cid"];
          cid_v1?: parameters["rowFilter.aggregate_entry.cid_v1"];
          datamodel_selector?: parameters["rowFilter.aggregate_entry.datamodel_selector"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["aggregate_entry"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  "/auth_key": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_key.id"];
          name?: parameters["rowFilter.auth_key.name"];
          secret?: parameters["rowFilter.auth_key.secret"];
          user_id?: parameters["rowFilter.auth_key.user_id"];
          inserted_at?: parameters["rowFilter.auth_key.inserted_at"];
          updated_at?: parameters["rowFilter.auth_key.updated_at"];
          deleted_at?: parameters["rowFilter.auth_key.deleted_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["auth_key"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** auth_key */
          auth_key?: definitions["auth_key"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_key.id"];
          name?: parameters["rowFilter.auth_key.name"];
          secret?: parameters["rowFilter.auth_key.secret"];
          user_id?: parameters["rowFilter.auth_key.user_id"];
          inserted_at?: parameters["rowFilter.auth_key.inserted_at"];
          updated_at?: parameters["rowFilter.auth_key.updated_at"];
          deleted_at?: parameters["rowFilter.auth_key.deleted_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.auth_key.id"];
          name?: parameters["rowFilter.auth_key.name"];
          secret?: parameters["rowFilter.auth_key.secret"];
          user_id?: parameters["rowFilter.auth_key.user_id"];
          inserted_at?: parameters["rowFilter.auth_key.inserted_at"];
          updated_at?: parameters["rowFilter.auth_key.updated_at"];
          deleted_at?: parameters["rowFilter.auth_key.deleted_at"];
        };
        body: {
          /** auth_key */
          auth_key?: definitions["auth_key"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/backup": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.backup.id"];
          upload_id?: parameters["rowFilter.backup.upload_id"];
          url?: parameters["rowFilter.backup.url"];
          inserted_at?: parameters["rowFilter.backup.inserted_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["backup"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** backup */
          backup?: definitions["backup"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.backup.id"];
          upload_id?: parameters["rowFilter.backup.upload_id"];
          url?: parameters["rowFilter.backup.url"];
          inserted_at?: parameters["rowFilter.backup.inserted_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.backup.id"];
          upload_id?: parameters["rowFilter.backup.upload_id"];
          url?: parameters["rowFilter.backup.url"];
          inserted_at?: parameters["rowFilter.backup.inserted_at"];
        };
        body: {
          /** backup */
          backup?: definitions["backup"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/content": {
    get: {
      parameters: {
        query: {
          cid?: parameters["rowFilter.content.cid"];
          dag_size?: parameters["rowFilter.content.dag_size"];
          inserted_at?: parameters["rowFilter.content.inserted_at"];
          updated_at?: parameters["rowFilter.content.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["content"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** content */
          content?: definitions["content"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          cid?: parameters["rowFilter.content.cid"];
          dag_size?: parameters["rowFilter.content.dag_size"];
          inserted_at?: parameters["rowFilter.content.inserted_at"];
          updated_at?: parameters["rowFilter.content.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          cid?: parameters["rowFilter.content.cid"];
          dag_size?: parameters["rowFilter.content.dag_size"];
          inserted_at?: parameters["rowFilter.content.inserted_at"];
          updated_at?: parameters["rowFilter.content.updated_at"];
        };
        body: {
          /** content */
          content?: definitions["content"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/deal": {
    get: {
      parameters: {
        query: {
          deal_id?: parameters["rowFilter.deal.deal_id"];
          aggregate_cid?: parameters["rowFilter.deal.aggregate_cid"];
          client?: parameters["rowFilter.deal.client"];
          provider?: parameters["rowFilter.deal.provider"];
          status?: parameters["rowFilter.deal.status"];
          start_epoch?: parameters["rowFilter.deal.start_epoch"];
          end_epoch?: parameters["rowFilter.deal.end_epoch"];
          entry_created?: parameters["rowFilter.deal.entry_created"];
          entry_last_updated?: parameters["rowFilter.deal.entry_last_updated"];
          status_meta?: parameters["rowFilter.deal.status_meta"];
          start_time?: parameters["rowFilter.deal.start_time"];
          sector_start_epoch?: parameters["rowFilter.deal.sector_start_epoch"];
          sector_start_time?: parameters["rowFilter.deal.sector_start_time"];
          end_time?: parameters["rowFilter.deal.end_time"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["deal"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
  "/pin": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin.id"];
          status?: parameters["rowFilter.pin.status"];
          content_cid?: parameters["rowFilter.pin.content_cid"];
          pin_location_id?: parameters["rowFilter.pin.pin_location_id"];
          inserted_at?: parameters["rowFilter.pin.inserted_at"];
          updated_at?: parameters["rowFilter.pin.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["pin"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** pin */
          pin?: definitions["pin"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin.id"];
          status?: parameters["rowFilter.pin.status"];
          content_cid?: parameters["rowFilter.pin.content_cid"];
          pin_location_id?: parameters["rowFilter.pin.pin_location_id"];
          inserted_at?: parameters["rowFilter.pin.inserted_at"];
          updated_at?: parameters["rowFilter.pin.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin.id"];
          status?: parameters["rowFilter.pin.status"];
          content_cid?: parameters["rowFilter.pin.content_cid"];
          pin_location_id?: parameters["rowFilter.pin.pin_location_id"];
          inserted_at?: parameters["rowFilter.pin.inserted_at"];
          updated_at?: parameters["rowFilter.pin.updated_at"];
        };
        body: {
          /** pin */
          pin?: definitions["pin"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/pin_location": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_location.id"];
          peer_id?: parameters["rowFilter.pin_location.peer_id"];
          peer_name?: parameters["rowFilter.pin_location.peer_name"];
          region?: parameters["rowFilter.pin_location.region"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["pin_location"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** pin_location */
          pin_location?: definitions["pin_location"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_location.id"];
          peer_id?: parameters["rowFilter.pin_location.peer_id"];
          peer_name?: parameters["rowFilter.pin_location.peer_name"];
          region?: parameters["rowFilter.pin_location.region"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_location.id"];
          peer_id?: parameters["rowFilter.pin_location.peer_id"];
          peer_name?: parameters["rowFilter.pin_location.peer_name"];
          region?: parameters["rowFilter.pin_location.region"];
        };
        body: {
          /** pin_location */
          pin_location?: definitions["pin_location"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/pin_request": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_request.id"];
          pin_id?: parameters["rowFilter.pin_request.pin_id"];
          inserted_at?: parameters["rowFilter.pin_request.inserted_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["pin_request"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** pin_request */
          pin_request?: definitions["pin_request"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_request.id"];
          pin_id?: parameters["rowFilter.pin_request.pin_id"];
          inserted_at?: parameters["rowFilter.pin_request.inserted_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.pin_request.id"];
          pin_id?: parameters["rowFilter.pin_request.pin_id"];
          inserted_at?: parameters["rowFilter.pin_request.inserted_at"];
        };
        body: {
          /** pin_request */
          pin_request?: definitions["pin_request"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/upload": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.upload.id"];
          user_id?: parameters["rowFilter.upload.user_id"];
          auth_key_id?: parameters["rowFilter.upload.auth_key_id"];
          content_cid?: parameters["rowFilter.upload.content_cid"];
          source_cid?: parameters["rowFilter.upload.source_cid"];
          type?: parameters["rowFilter.upload.type"];
          name?: parameters["rowFilter.upload.name"];
          inserted_at?: parameters["rowFilter.upload.inserted_at"];
          updated_at?: parameters["rowFilter.upload.updated_at"];
          deleted_at?: parameters["rowFilter.upload.deleted_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["upload"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** upload */
          upload?: definitions["upload"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.upload.id"];
          user_id?: parameters["rowFilter.upload.user_id"];
          auth_key_id?: parameters["rowFilter.upload.auth_key_id"];
          content_cid?: parameters["rowFilter.upload.content_cid"];
          source_cid?: parameters["rowFilter.upload.source_cid"];
          type?: parameters["rowFilter.upload.type"];
          name?: parameters["rowFilter.upload.name"];
          inserted_at?: parameters["rowFilter.upload.inserted_at"];
          updated_at?: parameters["rowFilter.upload.updated_at"];
          deleted_at?: parameters["rowFilter.upload.deleted_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.upload.id"];
          user_id?: parameters["rowFilter.upload.user_id"];
          auth_key_id?: parameters["rowFilter.upload.auth_key_id"];
          content_cid?: parameters["rowFilter.upload.content_cid"];
          source_cid?: parameters["rowFilter.upload.source_cid"];
          type?: parameters["rowFilter.upload.type"];
          name?: parameters["rowFilter.upload.name"];
          inserted_at?: parameters["rowFilter.upload.inserted_at"];
          updated_at?: parameters["rowFilter.upload.updated_at"];
          deleted_at?: parameters["rowFilter.upload.deleted_at"];
        };
        body: {
          /** upload */
          upload?: definitions["upload"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          name?: parameters["rowFilter.user.name"];
          picture?: parameters["rowFilter.user.picture"];
          email?: parameters["rowFilter.user.email"];
          issuer?: parameters["rowFilter.user.issuer"];
          github?: parameters["rowFilter.user.github"];
          public_address?: parameters["rowFilter.user.public_address"];
          inserted_at?: parameters["rowFilter.user.inserted_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user */
          user?: definitions["user"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          name?: parameters["rowFilter.user.name"];
          picture?: parameters["rowFilter.user.picture"];
          email?: parameters["rowFilter.user.email"];
          issuer?: parameters["rowFilter.user.issuer"];
          github?: parameters["rowFilter.user.github"];
          public_address?: parameters["rowFilter.user.public_address"];
          inserted_at?: parameters["rowFilter.user.inserted_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.user.id"];
          name?: parameters["rowFilter.user.name"];
          picture?: parameters["rowFilter.user.picture"];
          email?: parameters["rowFilter.user.email"];
          issuer?: parameters["rowFilter.user.issuer"];
          github?: parameters["rowFilter.user.github"];
          public_address?: parameters["rowFilter.user.public_address"];
          inserted_at?: parameters["rowFilter.user.inserted_at"];
          updated_at?: parameters["rowFilter.user.updated_at"];
        };
        body: {
          /** user */
          user?: definitions["user"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/rpc/postgres_fdw_handler": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/pgrst_watch": {
    post: {
      parameters: {
        body: {
          args: { [key: string]: unknown };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/postgres_fdw_validator": {
    post: {
      parameters: {
        body: {
          args: {
            "": string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/find_deals_by_content_cids": {
    post: {
      parameters: {
        body: {
          args: {
            cids: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/upsert_pin": {
    post: {
      parameters: {
        body: {
          args: {
            data: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/json_arr_to_text_arr": {
    post: {
      parameters: {
        body: {
          args: {
            _json: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/user_used_storage": {
    post: {
      parameters: {
        body: {
          args: {
            query_user_id: number;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/create_upload": {
    post: {
      parameters: {
        body: {
          args: {
            data: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/rpc/json_arr_to_upload__pin_type_arr": {
    post: {
      parameters: {
        body: {
          args: {
            _json: string;
          };
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferParams"];
        };
      };
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
}

export interface definitions {
  aggregate: {
    aggregate_cid?: string;
    piece_cid?: string;
    sha256hex?: string;
    export_size?: number;
    metadata?: string;
    entry_created?: string;
  };
  aggregate_entry: {
    aggregate_cid?: string;
    cid_v1?: string;
    datamodel_selector?: string;
  };
  auth_key: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
    secret: string;
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id: number;
    inserted_at: string;
    updated_at: string;
    deleted_at?: string;
  };
  backup: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `upload.id`.<fk table='upload' column='id'/>
     */
    upload_id: number;
    url: string;
    inserted_at: string;
  };
  content: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    cid: string;
    dag_size?: number;
    inserted_at: string;
    updated_at: string;
  };
  deal: {
    deal_id?: number;
    aggregate_cid?: string;
    client?: string;
    provider?: string;
    status?: string;
    start_epoch?: number;
    end_epoch?: number;
    entry_created?: string;
    entry_last_updated?: string;
    status_meta?: string;
    start_time?: string;
    sector_start_epoch?: number;
    sector_start_time?: string;
    end_time?: string;
  };
  pin: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    status:
      | "Undefined"
      | "ClusterError"
      | "PinError"
      | "UnpinError"
      | "Pinned"
      | "Pinning"
      | "Unpinning"
      | "Unpinned"
      | "Remote"
      | "PinQueued"
      | "UnpinQueued"
      | "Sharded";
    /**
     * Note:
     * This is a Foreign Key to `content.cid`.<fk table='content' column='cid'/>
     */
    content_cid: string;
    /**
     * Note:
     * This is a Foreign Key to `pin_location.id`.<fk table='pin_location' column='id'/>
     */
    pin_location_id: number;
    inserted_at: string;
    updated_at: string;
  };
  pin_location: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    peer_id: string;
    peer_name?: string;
    region?: string;
  };
  pin_request: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `pin.id`.<fk table='pin' column='id'/>
     */
    pin_id: number;
    inserted_at: string;
  };
  upload: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Note:
     * This is a Foreign Key to `user.id`.<fk table='user' column='id'/>
     */
    user_id: number;
    /**
     * Note:
     * This is a Foreign Key to `auth_key.id`.<fk table='auth_key' column='id'/>
     */
    auth_key_id?: number;
    /**
     * Note:
     * This is a Foreign Key to `content.cid`.<fk table='content' column='cid'/>
     */
    content_cid: string;
    source_cid: string;
    type: "Car" | "Upload" | "Blob" | "Multipart";
    name?: string;
    inserted_at: string;
    updated_at: string;
    deleted_at?: string;
  };
  user: {
    /**
     * Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    name: string;
    picture?: string;
    email: string;
    issuer: string;
    github?: string;
    public_address: string;
    inserted_at: string;
    updated_at: string;
  };
}

export interface parameters {
  /** Preference */
  preferParams: "params=single-object";
  /** Preference */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /** Preference */
  preferCount: "count=none";
  /** Filtering Columns */
  select: string;
  /** On Conflict */
  on_conflict: string;
  /** Ordering */
  order: string;
  /** Limiting and Pagination */
  range: string;
  /** Limiting and Pagination */
  rangeUnit: string;
  /** Limiting and Pagination */
  offset: string;
  /** Limiting and Pagination */
  limit: string;
  /** aggregate */
  "body.aggregate": definitions["aggregate"];
  "rowFilter.aggregate.aggregate_cid": string;
  "rowFilter.aggregate.piece_cid": string;
  "rowFilter.aggregate.sha256hex": string;
  "rowFilter.aggregate.export_size": string;
  "rowFilter.aggregate.metadata": string;
  "rowFilter.aggregate.entry_created": string;
  /** aggregate_entry */
  "body.aggregate_entry": definitions["aggregate_entry"];
  "rowFilter.aggregate_entry.aggregate_cid": string;
  "rowFilter.aggregate_entry.cid_v1": string;
  "rowFilter.aggregate_entry.datamodel_selector": string;
  /** auth_key */
  "body.auth_key": definitions["auth_key"];
  "rowFilter.auth_key.id": string;
  "rowFilter.auth_key.name": string;
  "rowFilter.auth_key.secret": string;
  "rowFilter.auth_key.user_id": string;
  "rowFilter.auth_key.inserted_at": string;
  "rowFilter.auth_key.updated_at": string;
  "rowFilter.auth_key.deleted_at": string;
  /** backup */
  "body.backup": definitions["backup"];
  "rowFilter.backup.id": string;
  "rowFilter.backup.upload_id": string;
  "rowFilter.backup.url": string;
  "rowFilter.backup.inserted_at": string;
  /** content */
  "body.content": definitions["content"];
  "rowFilter.content.cid": string;
  "rowFilter.content.dag_size": string;
  "rowFilter.content.inserted_at": string;
  "rowFilter.content.updated_at": string;
  /** deal */
  "body.deal": definitions["deal"];
  "rowFilter.deal.deal_id": string;
  "rowFilter.deal.aggregate_cid": string;
  "rowFilter.deal.client": string;
  "rowFilter.deal.provider": string;
  "rowFilter.deal.status": string;
  "rowFilter.deal.start_epoch": string;
  "rowFilter.deal.end_epoch": string;
  "rowFilter.deal.entry_created": string;
  "rowFilter.deal.entry_last_updated": string;
  "rowFilter.deal.status_meta": string;
  "rowFilter.deal.start_time": string;
  "rowFilter.deal.sector_start_epoch": string;
  "rowFilter.deal.sector_start_time": string;
  "rowFilter.deal.end_time": string;
  /** pin */
  "body.pin": definitions["pin"];
  "rowFilter.pin.id": string;
  "rowFilter.pin.status": string;
  "rowFilter.pin.content_cid": string;
  "rowFilter.pin.pin_location_id": string;
  "rowFilter.pin.inserted_at": string;
  "rowFilter.pin.updated_at": string;
  /** pin_location */
  "body.pin_location": definitions["pin_location"];
  "rowFilter.pin_location.id": string;
  "rowFilter.pin_location.peer_id": string;
  "rowFilter.pin_location.peer_name": string;
  "rowFilter.pin_location.region": string;
  /** pin_request */
  "body.pin_request": definitions["pin_request"];
  "rowFilter.pin_request.id": string;
  "rowFilter.pin_request.pin_id": string;
  "rowFilter.pin_request.inserted_at": string;
  /** upload */
  "body.upload": definitions["upload"];
  "rowFilter.upload.id": string;
  "rowFilter.upload.user_id": string;
  "rowFilter.upload.auth_key_id": string;
  "rowFilter.upload.content_cid": string;
  "rowFilter.upload.source_cid": string;
  "rowFilter.upload.type": string;
  "rowFilter.upload.name": string;
  "rowFilter.upload.inserted_at": string;
  "rowFilter.upload.updated_at": string;
  "rowFilter.upload.deleted_at": string;
  /** user */
  "body.user": definitions["user"];
  "rowFilter.user.id": string;
  "rowFilter.user.name": string;
  "rowFilter.user.picture": string;
  "rowFilter.user.email": string;
  "rowFilter.user.issuer": string;
  "rowFilter.user.github": string;
  "rowFilter.user.public_address": string;
  "rowFilter.user.inserted_at": string;
  "rowFilter.user.updated_at": string;
}

export interface operations {}

export interface external {}
