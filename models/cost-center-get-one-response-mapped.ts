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
import type * as buffer from "buffer"

import { CostCenterResponse } from './cost-center-response';

/**
 * 
 * @export
 * @interface CostCenterGetOneResponseMapped
 */
export interface CostCenterGetOneResponseMapped {
    /**
     * Status String
     * @type {string}
     * @memberof CostCenterGetOneResponseMapped
     */
    'status': string;
    /**
     * Resource data
     * @type {CostCenterResponse}
     * @memberof CostCenterGetOneResponseMapped
     */
    'data': CostCenterResponse;
    /**
     * 
     * @type {object}
     * @memberof CostCenterGetOneResponseMapped
     */
    'relations'?: object;
}

