import { h } from 'preact'
import Button from '../button'
import styles from './styles.css'

const emptyTemplates = <p>No Templates</p>
const emptyChildren = <p>No Children</p>

const NewTask = ({
  createTask,
  changeTemplate,
  changeChildren,
  templates,
  children
  // templates = [],
  // children = [],
}) => {
  if (!templates) templates = []
  if (!children) children = []

  const handleTemplateChange = template => event => {
    changeTemplate(template.id)
  }
  const handleChildrenChange = child => event => {
    changeChildren(child.id, event.target.checked)
  }
  const onSubmit = event => {
    event.preventDefault()

    createTask()
  }
  return (
    <form onSubmit={onSubmit}>
      <ul class={styles.list}>
        {templates.length === 0
          ? emptyTemplates
          : templates.map(template =>
              <li key={template.id}>
                <label>
                  <input
                    checked={template.checked || false}
                    onChange={handleTemplateChange(template)}
                    type="radio"
                    name="template"
                  />
                  {template.title}
                </label>
              </li>
            )}
      </ul>
      <ul class={styles.list}>
        {children.length === 0
          ? emptyChildren
          : children.map(child =>
              <li key={child.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={child.checked || false}
                    onChange={handleChildrenChange(child)}
                  />
                  {child.name}
                </label>
              </li>
            )}
      </ul>
      <Button type="submit" value="Create Task" />
    </form>
  )
}
export default NewTask
