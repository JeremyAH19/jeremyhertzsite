import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

const app = document.getElementById('app');

ReactDOM.render(<Layout/> ,app);