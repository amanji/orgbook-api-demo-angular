export interface Topic {
  id: number;
  create_timestamp: Date;
  update_timestamp: Date;
  effective_date: Date;
  inactive: boolean;
  latest: boolean;
  revoked: boolean;
  revoked_date: Date;
  credential_id: string;
  credential_set: any;
  credential_type: any;
  attributes: any[];
  names: any[];
  topic: any;
  related_topics: any[];
}
