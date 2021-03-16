import * as React from 'react';
import styles from './TestApp.module.scss';
import { ITestAppProps } from './ITestAppProps';
import { escape } from '@microsoft/sp-lodash-subset';
import {HashRouter, Route, Switch} from 'react-router-dom';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';
import ChildComponent3 from './ChildComponent3';
import { Store, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import RootComponent from './RootComponent';
import {ITestState} from "./ITestState";
import RootReducer from "../store/reducer/RootReducer";


export default class TestApp extends React.Component<ITestAppProps, {}> {
  private store: Store<ITestState>
  public constructor(props: ITestAppProps) {
    super(props);
    this.store = createStore(RootReducer, applyMiddleware(thunk));
  };
  public render(): React.ReactElement<ITestAppProps> {
    return (
      <div className={styles.testApp}>
        <Provider store={this.store}>
          <HashRouter>
            <Switch>
              <Route
                path="/1"
                component={() => (
                  <div>
                    <RootComponent siteUrl={this.props.siteUrl} />
                    <ChildComponent1 />
                  </div>
                )}
              ></Route>
              <Route
                path="/2"
                component={() => (
                  <div>
                    <RootComponent siteUrl={this.props.siteUrl} />
                    <ChildComponent2 />
                  </div>
                )}
              ></Route>
              <Route
                path="/3"
                component={() => (
                  <div>
                    <RootComponent siteUrl={this.props.siteUrl} />
                    <ChildComponent3 />
                  </div>
                )}
              ></Route>
            </Switch>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}
