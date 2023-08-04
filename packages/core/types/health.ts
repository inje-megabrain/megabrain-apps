export interface ServerHealthResponse {
  servers: ServerHealth[];
}

export interface ServerHealth {
  name: string;
  status: 'up' | 'down';
  updatedDate: Date;
}
