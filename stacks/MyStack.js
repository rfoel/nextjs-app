import * as sst from '@serverless-stack/resources'

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props)

    // Create a Next.js site
    const site = new sst.NextjsSite(this, 'Site', {
      path: 'frontend',
    })

    // Show the site URL in the output
    this.addOutputs({
      URL: site.url,
    })
  }
}
