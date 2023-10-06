import {
 f7
} from 'framework7-vue';

export default () => {

 const buttonOnclick = () => {
  f7.dialog.alert('Alert dialog');
 }

 return (
  <f7-page>
  <f7-list inset strong>
   <f7-list-item link="/about/" title="About"></f7-list-item>
   <f7-list-item link="/404/" title="404"
   ></f7-list-item>
  </f7-list>

  <f7-block strong inset>
   <div class="grid grid-cols-2 grid-gap">
    <f7-button onClick={buttonOnclick} outline round>Button</f7-button>
    <f7-button onClick={buttonOnclick} fill round>Button</f7-button>
  </div>
  </f7-block>
 </f7-page>
 );
};