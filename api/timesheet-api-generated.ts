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
import { ForbiddenResponse } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
// @ts-ignore
import { TimesheetGetManyFiltersParameter } from '../models';
// @ts-ignore
import { TimesheetGetManySortParameter } from '../models';
// @ts-ignore
import { TimesheetGetOneResponseMapped } from '../models';
// @ts-ignore
import { TimesheetsGetManyResponseMapped } from '../models';
// @ts-ignore
import { UnauthorizedResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TimesheetApi - axios parameter creator
 * @export
 */
export const TimesheetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get One Timesheet
         * @summary Get One Timesheet
         * @param {string} id Resource Id
         * @param {Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>} [select] Select Timesheet fields, comma-separated. (e.g. &#x60;select&#x3D;id,firstName,lastName,workEmail&#x60;)
         * @param {Array<'approverEmployee' | 'employee'>} [relations] Select related Timesheet resources, comma-separated. (e.g. &#x60;relations&#x3D;office,department&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get: async (id: string, select?: Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>, relations?: Array<'approverEmployee' | 'employee'>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('get', 'id', id)
            const localVarPath = `/timesheet/{id}`
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

            if (relations) {
                localVarQueryParameter['relations'] = relations.join(COLLECTION_FORMATS.csv);
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/timesheet/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get Many Timesheets
         * @summary Get Many Timesheets
         * @param {Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>} [select] Select Timesheet fields, comma-separated. (e.g. &#x60;select&#x3D;id,firstName,lastName,workEmail&#x60;)
         * @param {Array<'approverEmployee' | 'employee'>} [relations] Select related Timesheet resources, comma-separated. (e.g. &#x60;relations&#x3D;office,department&#x60;)
         * @param {TimesheetGetManyFiltersParameter} [filters] Filters conditions per field. (e.g. &#x60;filters[id][$eq]&#x3D;507f1f77bcf86cd799439011&#x60;)
         * @param {number} [limit] Limit amount of received Timesheets. (e.g. &#x60;limit&#x3D;20&#x60;)
         * @param {number} [offset] Offset amount of received Timesheets. (e.g. &#x60;offset&#x3D;20&#x60;)
         * @param {TimesheetGetManySortParameter} [sort] Sort received Timesheets by field. (e.g. &#x60;sort[id]&#x3D;asc&#x60;)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMany: async (select?: Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>, relations?: Array<'approverEmployee' | 'employee'>, filters?: TimesheetGetManyFiltersParameter, limit?: number, offset?: number, sort?: TimesheetGetManySortParameter, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/timesheet`;
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

            if (relations) {
                localVarQueryParameter['relations'] = relations.join(COLLECTION_FORMATS.csv);
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
                pathTemplate: '/timesheet',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimesheetApi - functional programming interface
 * @export
 */
export const TimesheetApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimesheetApiAxiosParamCreator(configuration)
    return {
        /**
         * Get One Timesheet
         * @summary Get One Timesheet
         * @param {TimesheetApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async get(requestParameters: TimesheetApiGetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimesheetGetOneResponseMapped>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.get(requestParameters.id, requestParameters.select, requestParameters.relations, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get Many Timesheets
         * @summary Get Many Timesheets
         * @param {TimesheetApiGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMany(requestParameters: TimesheetApiGetManyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimesheetsGetManyResponseMapped>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMany(requestParameters.select, requestParameters.relations, requestParameters.filters, requestParameters.limit, requestParameters.offset, requestParameters.sort, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimesheetApi - factory interface
 * @export
 */
export const TimesheetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimesheetApiFp(configuration)
    return {
        /**
         * Get One Timesheet
         * @summary Get One Timesheet
         * @param {TimesheetApiGetRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        get(requestParameters: TimesheetApiGetRequest, options?: AxiosRequestConfig): AxiosPromise<TimesheetGetOneResponseMapped> {
            return localVarFp.get(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get Many Timesheets
         * @summary Get Many Timesheets
         * @param {TimesheetApiGetManyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMany(requestParameters: TimesheetApiGetManyRequest, options?: AxiosRequestConfig): AxiosPromise<TimesheetsGetManyResponseMapped> {
            return localVarFp.getMany(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for get operation in TimesheetApi.
 * @export
 * @interface TimesheetApiGetRequest
 */
export type TimesheetApiGetRequest = {
    
    /**
    * Resource Id
    * @type {string}
    * @memberof TimesheetApiGet
    */
    readonly id: string
    
    /**
    * Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)
    * @type {Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>}
    * @memberof TimesheetApiGet
    */
    readonly select?: Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>
    
    /**
    * Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)
    * @type {Array<'approverEmployee' | 'employee'>}
    * @memberof TimesheetApiGet
    */
    readonly relations?: Array<'approverEmployee' | 'employee'>
    
}

/**
 * Request parameters for getMany operation in TimesheetApi.
 * @export
 * @interface TimesheetApiGetManyRequest
 */
export type TimesheetApiGetManyRequest = {
    
    /**
    * Select Timesheet fields, comma-separated. (e.g. `select=id,firstName,lastName,workEmail`)
    * @type {Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>}
    * @memberof TimesheetApiGetMany
    */
    readonly select?: Array<'id' | 'status' | 'startDate' | 'endDate' | 'localCutOffDate' | 'utcCutOffDate' | 'approvalDeadlineDate' | 'interval' | 'note' | 'approverEmployeeId' | 'employeeId' | 'submitDate' | 'approvalDate' | 'rejectedDate' | 'updated' | 'timezone'>
    
    /**
    * Select related Timesheet resources, comma-separated. (e.g. `relations=office,department`)
    * @type {Array<'approverEmployee' | 'employee'>}
    * @memberof TimesheetApiGetMany
    */
    readonly relations?: Array<'approverEmployee' | 'employee'>
    
    /**
    * Filters conditions per field. (e.g. `filters[id][$eq]=507f1f77bcf86cd799439011`)
    * @type {TimesheetGetManyFiltersParameter}
    * @memberof TimesheetApiGetMany
    */
    readonly filters?: TimesheetGetManyFiltersParameter
    
    /**
    * Limit amount of received Timesheets. (e.g. `limit=20`)
    * @type {number}
    * @memberof TimesheetApiGetMany
    */
    readonly limit?: number
    
    /**
    * Offset amount of received Timesheets. (e.g. `offset=20`)
    * @type {number}
    * @memberof TimesheetApiGetMany
    */
    readonly offset?: number
    
    /**
    * Sort received Timesheets by field. (e.g. `sort[id]=asc`)
    * @type {TimesheetGetManySortParameter}
    * @memberof TimesheetApiGetMany
    */
    readonly sort?: TimesheetGetManySortParameter
    
}

/**
 * TimesheetApiGenerated - object-oriented interface
 * @export
 * @class TimesheetApiGenerated
 * @extends {BaseAPI}
 */
export class TimesheetApiGenerated extends BaseAPI {
    /**
     * Get One Timesheet
     * @summary Get One Timesheet
     * @param {TimesheetApiGetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetApiGenerated
     */
    public get(requestParameters: TimesheetApiGetRequest, options?: AxiosRequestConfig) {
        return TimesheetApiFp(this.configuration).get(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get Many Timesheets
     * @summary Get Many Timesheets
     * @param {TimesheetApiGetManyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimesheetApiGenerated
     */
    public getMany(requestParameters: TimesheetApiGetManyRequest, options?: AxiosRequestConfig) {
        return TimesheetApiFp(this.configuration).getMany(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
