// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { ClusterDataInfo } from './ClusterDataInfo';
// eslint-disable-next-line no-duplicate-imports
import type { ReadReplicaSpec } from './ReadReplicaSpec';


/**
 * Cluster data
 * @export
 * @interface ReadReplicaData
 */
export interface ReadReplicaData  {
  /**
   * 
   * @type {ReadReplicaSpec}
   * @memberof ReadReplicaData
   */
  spec: ReadReplicaSpec;
  /**
   * 
   * @type {ClusterDataInfo}
   * @memberof ReadReplicaData
   */
  info: ClusterDataInfo;
}



