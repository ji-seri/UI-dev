  <tr>
    <td>{{name}}</td>
    <td>{{cmp_state}}</td>
    {{#account}}
      <td>{{name}}</td>
    {{/account}}
    {{#location}}
      {{#datacenter}}
        <td>{{name}}</td>
      {{/datacenter}}
    {{/location}}
    <td>{{cpu_cores}}</td>
    <td>{{cpu}}</td> //????????
    <td>{{ram_mb}}</td>
    <td>{{volumes_mb}}</td>
  </tr>
