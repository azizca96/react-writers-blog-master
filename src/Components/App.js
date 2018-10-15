import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Errors'
import Dashboard from './Writers/index'
import Charts from './Dashboard/charts'
import Datatable from './Dashboard/datatable'
import Form from './Dashboard/form'
import Gallery from './Dashboard/gallery'
import Maps from './Dashboard/maps'
import Layout from './Layout'

export default class extends Component {
  state = {
    dashboard: [],
    charts: [],
    datatable:[],
    form:[],
    gallery:[],
    maps:[]
  }

  async componentDidMount() {
    const dashboard = await (await fetch('http://localhost:3004/writers?_embed=texts')).json()

    this.setState({ dashboard })
    this.setState({Charts})
    this.setState({Datatable})
    this.setState({Form})
    this.setState({Gallery})
    this.setState({Maps})
  }

  render() {
    const { dashboard } = this.state
    const { charts } = this.state
    const { datatable  } = this.state
    const { form  } = this.state
    const { gallery  } = this.state
    const { maps  } = this.state
    return <BrowserRouter>
      <Layout writers={dashboard}>
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          
          <Route path="/dashboard" render={
            props => <Dashboard {...props} dashboard={dashboard} />
          } />
          <Route path="/charts" render={
            props => <Charts {...props} datable={charts} />
          } />
          <Route path="/datatable" render={
            props => <Datatable {...props} datable={datatable} />
          } />
          <Route path="/form" render={
            props => <Form {...props} form={form} />
          } />
          <Route path="/gallery" render={
            props => <Gallery {...props} form={gallery} />
          } />
          <Route path="/maps" render={
            props => <Maps {...props} form={maps} />
          } />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  }
}
