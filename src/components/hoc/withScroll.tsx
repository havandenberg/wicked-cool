import { parse } from 'querystring';
import * as React from 'react';
import { scrollToId } from '../../utils/scroll';

export interface ScrollProps {
  location?: {
    search: string;
  };
}

const withScroll = <P extends object>(Component: React.ComponentType<P>) =>
  class WithScroll extends React.Component<P & ScrollProps> {
    componentDidMount() {
      const { location } = this.props;
      if (location) {
        const action = parse(location.search)['?action'];
        const id = parse(location.search)['?id'];
        scrollToId(action ? `${action}` : id ? `${id}` : 'top');
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  };

export default withScroll;
