export default {
 setup() {
  return () => (
   <f7-page no-toolbar>
    <f7-navbar title="Not found" back-link="Back"></f7-navbar>
    <f7-block strong inset>
     <p>
Sorry
     </p>
     <p>
Requested content not found.
     </p>
    </f7-block>
   </f7-page>
  );
 },
};