import GitDeploy from './git-deploy.mdx'
import CLIDeploy from './cli-deploy.mdx'
import Tabs from '~/components/tabs'

export default function DeploySection({ name, type = 'app' }) {
  return (
    <Tabs tabs={['With Git', 'Manually']}>
      <GitDeploy />
      <CLIDeploy name={name} type={type} />
    </Tabs>
  )
}
