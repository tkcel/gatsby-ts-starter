import Link from 'gatsby-link'
import * as React from 'react'
import Helmet from 'react-helmet'
import './index.css'

const Header = (): JSX.Element => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: () => React.ReactNode
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render(): JSX.Element {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}>
          {this.props.children()}
        </div>
      </div>
    )
  }
}

export default DefaultLayout
