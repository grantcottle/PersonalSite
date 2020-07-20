/*
 *  * Doesn't cover all the data fields.
 *   * Remove or set readOnly to `false` if you want to be able
 *    * to edit the responses in the Studio
 *     */

export default {
  name: 'submission.form',
  type: 'document',
  title: 'Form submission',
  readOnly: false,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'number',
      type: 'number',
      title: 'Number'
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at'
    },
    {
      name: 'client',
      type: 'object',
      title: 'Client',
      
    }
  ]
}
