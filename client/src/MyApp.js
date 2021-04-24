import React, {Component, lazy, Suspense} from "react";
import { Switch, Route } from "react-router";
import Loader from "./components/Loader";
import Main from "./components/Main";
import Login from "./pages/Login/index";
import PageNotFound from "./components/PageNotFound";
import * as path from "./constants/routes";


const Boards = lazy(() => import("./pages/Boards"));
const Topics = lazy(() => import("./pages/Topics"));


export default class MyApp extends Component {
    render() {
        return (
            <Switch>
                <Route exact path={path.SIGN_IN} component={Login} />
                <Main {...this.props}>
                    <Suspense fallback={<Loader />}>
                    <Switch> 
                        <Route
                            exact
                            path={path.BOARDS}
                            render={props => <Boards {...props} />}
                        />
                        <Route
                            path={path.TOPICS}
                            render={props => <Topics {...props} />}
                        />
                        <Route render={props => <PageNotFound {...props} />} />
                    </Switch>
                    </Suspense>
                </Main>
            </Switch>
        )
    }
}
