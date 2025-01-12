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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useQuery, useInfiniteQuery, useMutation, UseQueryOptions, UseInfiniteQueryOptions, UseMutationOptions } from 'react-query';
import Axios from '../runtime';
import type { AxiosInstance } from 'axios';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type {
  ApiError,
  XClusterConfigResponse,
  XClusterConfigSpec,
} from '../models';

export interface CreateXclusterReplicationForQuery {
  accountId: string;
  projectId: string;
  XClusterConfigSpec?: XClusterConfigSpec;
}

/**
 * API to create replication
 * API to create replication
 */


export const createXclusterReplicationMutate = (
  body: CreateXclusterReplicationForQuery,
  customAxiosInstance?: AxiosInstance
) => {
  const url = '/private/accounts/{accountId}/projects/{projectId}/xcluster_replication'.replace(`{${'accountId'}}`, encodeURIComponent(String(body.accountId))).replace(`{${'projectId'}}`, encodeURIComponent(String(body.projectId)));
  // eslint-disable-next-line
  // @ts-ignore
  delete body.accountId;
  // eslint-disable-next-line
  // @ts-ignore
  delete body.projectId;
  return Axios<XClusterConfigResponse>(
    {
      url,
      method: 'POST',
      data: body.XClusterConfigSpec
    },
    customAxiosInstance
  );
};

export const useCreateXclusterReplicationMutation = <Error = ApiError>(
  options?: {
    mutation?:UseMutationOptions<XClusterConfigResponse, Error>,
    customAxiosInstance?: AxiosInstance;
  }
) => {
  const {mutation: mutationOptions, customAxiosInstance} = options ?? {};
  // eslint-disable-next-line
  // @ts-ignore
  return useMutation<XClusterConfigResponse, Error, CreateXclusterReplicationForQuery, unknown>((props) => {
    return  createXclusterReplicationMutate(props, customAxiosInstance);
  }, mutationOptions);
};





