/* tslint:disable */
/* eslint-disable */
/*
AlexisHR API

<h1 id=\"introduction\">Introduction</h1>
<p>
  AlexisHR API is currently in preview. This means that small, backward
  incompatible changes might be introduced while in preview. The changes will be
  documented and communicated.
  <a
    href=\"https://cdn.forms-content.sg-form.com/56c6a65c-90a2-11eb-a700-a6de1aea3a1a\"
    target=\"_blank\"
    ><button>Subscribe to updates</button></a
  >
</p>

<h1 id=\"authentication\">Authentication</h1>
<pre class=\"click-to-expand-wrapper is-snippet-wrapper language-undefined\">
<code class=\"is-highlighted language-bash\">curl https://api.alexishr.com/v1/employee \\
  -H \"Authorization: Bearer &lt;your_access_token&gt;\"</code>
</pre>
<p>
  Authenticate your account when using the API by including your secret Access
  Token in the request.
  <a href=\"https://app.alexishr.com/access-tokens\">Manage your Access Tokens</a
  >.
</p>
<p>
  Authentication is performed by passing the Access Token in the Authorization
  header.
</p>
<hr />

<h1 id=\"structure\">Structure</h1>
<p>
  You will find the structure of the API to be highly uniform and consistent.
  Typically every resource can be accessed via a top level endpoint, such as
  <code>/v1/employee</code>. For every such resource, you can perform some of
  the following operations:
</p>
<h2>Operations</h2>
<table>
  <tr>
    <td>GET /v1/:resource</td>
    <td>List all objects of this type</td>
  </tr>
  <tr>
    <td>GET /v1/:resource/:id</td>
    <td>Retrieve a resource by id</td>
  </tr>
  <tr>
    <td>POST /v1/:resource</td>
    <td>Create a resource of this type</td>
  </tr>
  <tr>
    <td>PATCH /v1/:resource/:id</td>
    <td>Update the resource by id</td>
  </tr>
  <tr>
    <td>DELETE /v1/:resource/:id</td>
    <td>Delete the resource by id</td>
  </tr>
</table>
<hr />

<h1 id=\"roles\">Roles</h1>
<p>The Access Tokens will have owner permission on the account</p>
<hr />

<h1 id=\"filters\">Filters</h1>
<p>
  Some of the list endpoints allow to filter results by certain conditions.
  Refer to specific resources to find out what criteria are allowed. Below is a
  list of the different conditions.
</p>

<h4 id=\"eq\"><code>$eq</code></h4>
<p>Find all results matching the attribute value specified.</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[fieldName][$eq]=value</code></pre>
</div>
<p>Can also be simplified like this.</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[fieldName]=value</code></pre>
</div>

<h4 id=\"neq\"><code>$neq</code></h4>
<p>Find all results not matching the attribute value specified.</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[fieldName][$neq]=value</code></pre>
</div>

<h4 id=\"gt\"><code>$gt</code>, <code>$gte</code></h4>
<p>
  Find all results where the value is more (<code>$gt</code>) or more and equal
  (<code>$gte</code>) to a given value.
</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[startDate][$gte]=2020-01-01</code></pre>
</div>
<hr />

<h4 id=\"lt\"><code>$lt</code>, <code>$lte</code></h4>
<p>
  Find all results where the value is less (<code>$lt</code>) or less and equal
  (<code>$lte</code>) to a given value.
</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[startDate][$lte]=2020-01-01</code></pre>
</div>
<hr />

<h4 id=\"in\"><code>$in</code>, <code>$nin</code></h4>
<p>
  Find all results matching (<code>$in</code>) or not matching
  (<code>$nin</code>) any of the attribute values specified.
</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[fieldName][$in][]=value1&filters[fieldName][$in][]=value2</code></pre>
</div>
<hr />

<h4 id=\"between\"><code>$between</code></h4>
<p>Find all results between two values specified.</p>
<div>
  <pre><code class=\"language-shell\" data-lang=\"shell\">GET /v1/example?filters[startDate][$between][]=2020-01-01&filters[startDate][$between][]=2020-12-31</code></pre>
</div>
<hr />

<h1 id=\"versioning\">Versioning</h1>
<p>
  Each version of the API is guaranteed to be compatible with the resources of
  the same version. When we make breaking changes to the API a new version will
  be published
</p>
<hr />

<h1 id=\"changelog\">Changelog</h1>
<h3>2023-12-20</h3>
<p>Field [updated] added for filter & select for Get Many Employments and Get Many Employees.</p>
<h3>2021-03-15</h3>
<p>First draft was published</p>
<hr />

# Authentication

<!-- ReDoc-Inject: <security-definitions> -->

The version of the OpenAPI document: v1-preview
Contact: support@alexishr.com

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BadRequestResponse } from '../models';
// @ts-ignore
import { CostCenterGetOneResponseMapped } from '../models';
// @ts-ignore
import { CostCenterResponseMapped } from '../models';
// @ts-ignore
import { CostCentersGetManyResponseMapped } from '../models';
// @ts-ignore
import { CostcenterGetManyFiltersParameter } from '../models';
// @ts-ignore
import { CostcenterGetManySortParameter } from '../models';
// @ts-ignore
import { CreateCostCenterRequest } from '../models';
// @ts-ignore
import { EmptyResponseMapped } from '../models';
// @ts-ignore
import { ForbiddenResponse } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
// @ts-ignore
import { UnauthorizedResponse } from '../models';
// @ts-ignore
import { UpdateCostCenterRequest } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CostCenterApi - axios parameter creator
 * @export
 */
export const CostCenterApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create One Cost Center
         * @summary Create One Cost Center
         * @param {CreateCostCenterRequest} createCostCenterRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneCostCenter: async (createCostCenterRequest: CreateCostCenterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createCostCenterRequest' is not null or undefined
            assertParamExists('createOneCostCenter', 'createCostCenterRequest', createCostCenterRequest)
            const localVarPath = `/cost-center`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createCostCenterRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createCostCenterRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete One Cost Center
         * @summary Delete One Cost Center
         * @param {string} id Resource Id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneCostCenter: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteOneCostCenter', 'id', id)
            const localVarPath = `/cost-center/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Many Cost Centers
         * @summary Get Many Cost Centers
         * @param {Array<'id' | 'companyId' | 'code' | 'name'>} [select] Select Cost Center fields, comma-separated. (e.g. &#x60;select&#x3D;id,firstName,lastName,workEmail&#x60;)
         * @param {CostcenterGetManyFiltersParameter} [filters] Filters conditions per field. (e.g. &#x60;filters[id][$eq]&#x3D;507f1f77bcf86cd799439011&#x60;)
         * @param {number} [limit] Limit amount of received Cost Centers. (e.g. &#x60;limit&#x3D;20&#x60;)
         * @param {number} [offset] Offset amount of received Cost Centers. (e.g. &#x60;offset&#x3D;20&#x60;)
         * @param {CostcenterGetManySortParameter} [sort] Sort received Cost Centers by field. (e.g. &#x60;sort[id]&#x3D;asc&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMany: async (select?: Array<'id' | 'companyId' | 'code' | 'name'>, filters?: CostcenterGetManyFiltersParameter, limit?: number, offset?: number, sort?: CostcenterGetManySortParameter, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/cost-center`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (select) {
                localVarQueryParameter['select'] = select.join(COLLECTION_FORMATS.csv);
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get One Cost Center
         * @summary Get One Cost Center
         * @param {string} id Resource Id
         * @param {Array<'id' | 'companyId' | 'code' | 'name'>} [select] Select Cost Center fields, comma-separated. (e.g. &#x60;select&#x3D;id,firstName,lastName,workEmail&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneCostCenter: async (id: string, select?: Array<'id' | 'companyId' | 'code' | 'name'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getOneCostCenter', 'id', id)
            const localVarPath = `/cost-center/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (select) {
                localVarQueryParameter['select'] = select.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Replace One Cost Center
         * @summary Replace One Cost Center
         * @param {string} id Resource Id
         * @param {UpdateCostCenterRequest} updateCostCenterRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceOneCostCenter: async (id: string, updateCostCenterRequest: UpdateCostCenterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('replaceOneCostCenter', 'id', id)
            // verify required parameter 'updateCostCenterRequest' is not null or undefined
            assertParamExists('replaceOneCostCenter', 'updateCostCenterRequest', updateCostCenterRequest)
            const localVarPath = `/cost-center/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateCostCenterRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateCostCenterRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update One Cost Center
         * @summary Update One Cost Center
         * @param {string} id Resource Id
         * @param {UpdateCostCenterRequest} updateCostCenterRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneCostCenter: async (id: string, updateCostCenterRequest: UpdateCostCenterRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateOneCostCenter', 'id', id)
            // verify required parameter 'updateCostCenterRequest' is not null or undefined
            assertParamExists('updateOneCostCenter', 'updateCostCenterRequest', updateCostCenterRequest)
            const localVarPath = `/cost-center/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateCostCenterRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/cost-center/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateCostCenterRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CostCenterApi - functional programming interface
 * @export
 */
export const CostCenterApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CostCenterApiAxiosParamCreator(configuration)
    return {
        /**
         * Create One Cost Center
         * @summary Create One Cost Center
         * @param {CostCenterApiCreateOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createOneCostCenter(requestParameters: CostCenterApiCreateOneCostCenterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCenterResponseMapped>> {
            const createCostCenterRequest: CreateCostCenterRequest = {
                code: requestParameters.code,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createOneCostCenter(createCostCenterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Delete One Cost Center
         * @summary Delete One Cost Center
         * @param {CostCenterApiDeleteOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOneCostCenter(requestParameters: CostCenterApiDeleteOneCostCenterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmptyResponseMapped>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOneCostCenter(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Many Cost Centers
         * @summary Get Many Cost Centers
         * @param {CostCenterApiGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMany(requestParameters: CostCenterApiGetManyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCentersGetManyResponseMapped>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMany(requestParameters.select, requestParameters.filters, requestParameters.limit, requestParameters.offset, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get One Cost Center
         * @summary Get One Cost Center
         * @param {CostCenterApiGetOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOneCostCenter(requestParameters: CostCenterApiGetOneCostCenterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCenterGetOneResponseMapped>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOneCostCenter(requestParameters.id, requestParameters.select, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Replace One Cost Center
         * @summary Replace One Cost Center
         * @param {CostCenterApiReplaceOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async replaceOneCostCenter(requestParameters: CostCenterApiReplaceOneCostCenterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCenterResponseMapped>> {
            const updateCostCenterRequest: UpdateCostCenterRequest = {
                code: requestParameters.code,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.replaceOneCostCenter(requestParameters.id, updateCostCenterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update One Cost Center
         * @summary Update One Cost Center
         * @param {CostCenterApiUpdateOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOneCostCenter(requestParameters: CostCenterApiUpdateOneCostCenterRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCenterResponseMapped>> {
            const updateCostCenterRequest: UpdateCostCenterRequest = {
                code: requestParameters.code,
                name: requestParameters.name
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOneCostCenter(requestParameters.id, updateCostCenterRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CostCenterApi - factory interface
 * @export
 */
export const CostCenterApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CostCenterApiFp(configuration)
    return {
        /**
         * Create One Cost Center
         * @summary Create One Cost Center
         * @param {CostCenterApiCreateOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createOneCostCenter(requestParameters: CostCenterApiCreateOneCostCenterRequest, options?: AxiosRequestConfig): AxiosPromise<CostCenterResponseMapped> {
            return localVarFp.createOneCostCenter(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete One Cost Center
         * @summary Delete One Cost Center
         * @param {CostCenterApiDeleteOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOneCostCenter(requestParameters: CostCenterApiDeleteOneCostCenterRequest, options?: AxiosRequestConfig): AxiosPromise<EmptyResponseMapped> {
            return localVarFp.deleteOneCostCenter(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Many Cost Centers
         * @summary Get Many Cost Centers
         * @param {CostCenterApiGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMany(requestParameters: CostCenterApiGetManyRequest, options?: AxiosRequestConfig): AxiosPromise<CostCentersGetManyResponseMapped> {
            return localVarFp.getMany(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get One Cost Center
         * @summary Get One Cost Center
         * @param {CostCenterApiGetOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOneCostCenter(requestParameters: CostCenterApiGetOneCostCenterRequest, options?: AxiosRequestConfig): AxiosPromise<CostCenterGetOneResponseMapped> {
            return localVarFp.getOneCostCenter(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Replace One Cost Center
         * @summary Replace One Cost Center
         * @param {CostCenterApiReplaceOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        replaceOneCostCenter(requestParameters: CostCenterApiReplaceOneCostCenterRequest, options?: AxiosRequestConfig): AxiosPromise<CostCenterResponseMapped> {
            return localVarFp.replaceOneCostCenter(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update One Cost Center
         * @summary Update One Cost Center
         * @param {CostCenterApiUpdateOneCostCenterRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOneCostCenter(requestParameters: CostCenterApiUpdateOneCostCenterRequest, options?: AxiosRequestConfig): AxiosPromise<CostCenterResponseMapped> {
            return localVarFp.updateOneCostCenter(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createOneCostCenter operation in CostCenterApi.
 * @export
 * @interface CostCenterApiCreateOneCostCenterRequest
 */
export type CostCenterApiCreateOneCostCenterRequest = {
    
} & CreateCostCenterRequest

/**
 * Request parameters for deleteOneCostCenter operation in CostCenterApi.
 * @export
 * @interface CostCenterApiDeleteOneCostCenterRequest
 */
export type CostCenterApiDeleteOneCostCenterRequest = {
    
    /**
    * Resource Id
    * @type {string}
    * @memberof CostCenterApiDeleteOneCostCenter
    */
    readonly id: string
    
}

/**
 * Request parameters for getMany operation in CostCenterApi.
 * @export
 * @interface CostCenterApiGetManyRequest
 */
export type CostCenterApiGetManyRequest = {
    
    /**
    * Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)
    * @type {Array<'id' | 'companyId' | 'code' | 'name'>}
    * @memberof CostCenterApiGetMany
    */
    readonly select?: Array<'id' | 'companyId' | 'code' | 'name'>
    
    /**
    * Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)
    * @type {CostcenterGetManyFiltersParameter}
    * @memberof CostCenterApiGetMany
    */
    readonly filters?: CostcenterGetManyFiltersParameter
    
    /**
    * Limit amount of received Cost Centers. (e.g. `limit=20`)
    * @type {number}
    * @memberof CostCenterApiGetMany
    */
    readonly limit?: number
    
    /**
    * Offset amount of received Cost Centers. (e.g. `offset=20`)
    * @type {number}
    * @memberof CostCenterApiGetMany
    */
    readonly offset?: number
    
    /**
    * Sort received Cost Centers by field. (e.g. `sort[id]=asc`)
    * @type {CostcenterGetManySortParameter}
    * @memberof CostCenterApiGetMany
    */
    readonly sort?: CostcenterGetManySortParameter
    
}

/**
 * Request parameters for getOneCostCenter operation in CostCenterApi.
 * @export
 * @interface CostCenterApiGetOneCostCenterRequest
 */
export type CostCenterApiGetOneCostCenterRequest = {
    
    /**
    * Resource Id
    * @type {string}
    * @memberof CostCenterApiGetOneCostCenter
    */
    readonly id: string
    
    /**
    * Select Cost Center fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)
    * @type {Array<'id' | 'companyId' | 'code' | 'name'>}
    * @memberof CostCenterApiGetOneCostCenter
    */
    readonly select?: Array<'id' | 'companyId' | 'code' | 'name'>
    
}

/**
 * Request parameters for replaceOneCostCenter operation in CostCenterApi.
 * @export
 * @interface CostCenterApiReplaceOneCostCenterRequest
 */
export type CostCenterApiReplaceOneCostCenterRequest = {
    
    /**
    * Resource Id
    * @type {string}
    * @memberof CostCenterApiReplaceOneCostCenter
    */
    readonly id: string
    
} & UpdateCostCenterRequest

/**
 * Request parameters for updateOneCostCenter operation in CostCenterApi.
 * @export
 * @interface CostCenterApiUpdateOneCostCenterRequest
 */
export type CostCenterApiUpdateOneCostCenterRequest = {
    
    /**
    * Resource Id
    * @type {string}
    * @memberof CostCenterApiUpdateOneCostCenter
    */
    readonly id: string
    
} & UpdateCostCenterRequest

/**
 * CostCenterApiGenerated - object-oriented interface
 * @export
 * @class CostCenterApiGenerated
 * @extends {BaseAPI}
 */
export class CostCenterApiGenerated extends BaseAPI {
    /**
     * Create One Cost Center
     * @summary Create One Cost Center
     * @param {CostCenterApiCreateOneCostCenterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public createOneCostCenter(requestParameters: CostCenterApiCreateOneCostCenterRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).createOneCostCenter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete One Cost Center
     * @summary Delete One Cost Center
     * @param {CostCenterApiDeleteOneCostCenterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public deleteOneCostCenter(requestParameters: CostCenterApiDeleteOneCostCenterRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).deleteOneCostCenter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Many Cost Centers
     * @summary Get Many Cost Centers
     * @param {CostCenterApiGetManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public getMany(requestParameters: CostCenterApiGetManyRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).getMany(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get One Cost Center
     * @summary Get One Cost Center
     * @param {CostCenterApiGetOneCostCenterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public getOneCostCenter(requestParameters: CostCenterApiGetOneCostCenterRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).getOneCostCenter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Replace One Cost Center
     * @summary Replace One Cost Center
     * @param {CostCenterApiReplaceOneCostCenterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public replaceOneCostCenter(requestParameters: CostCenterApiReplaceOneCostCenterRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).replaceOneCostCenter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update One Cost Center
     * @summary Update One Cost Center
     * @param {CostCenterApiUpdateOneCostCenterRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCenterApiGenerated
     */
    public updateOneCostCenter(requestParameters: CostCenterApiUpdateOneCostCenterRequest, options?: AxiosRequestConfig) {
        return CostCenterApiFp(this.configuration).updateOneCostCenter(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
