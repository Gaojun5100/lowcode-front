import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import request from '../../../common/request';
import Banner from './component/Banner/'
import List from './component/List'
import Footer from './component/Footer/'
import { parseJsonByString } from '../../../common/utils'

const map = { Banner, Footer, List }

const render = (index, item) =>{
  const Component = map[item.name]
  return Component ? <Component key={index} schema={item} /> : null
}

const  Home = () => {
  const [ pageSchema, setPageSchema ] = useState({});
  const { children = [], attributes = {} } = pageSchema;

  useEffect(() => {
    request.get('/api/schema/getLatestOne').then((response) => {
      const data = response?.data;
      data && setPageSchema(parseJsonByString(data.schema, {}));
    });
  }, [])
  
  return (
    <div>
      <Helmet>
        <title>{attributes?.title || ''}</title>
      </Helmet> 
      { children.map((item, index) => render(index,item)) }
    </div>
  );
}

export default Home;
