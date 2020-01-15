import React from 'react'
import { mount, route } from 'navi'
import {Some} from "../Some"

// 手抜きですたい 🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿🐿
const are = async () => ({
    htmlUrl: (
      await (await fetch("https://api.github.com/users/barontommy")).json()
    ).html_url
  });
  
export default mount({
  '/:id': route({
    async getView(request) {
    await new Promise(resolve => setTimeout(resolve, 1000));
      const props = {...await are(), id: request.params.id}
      return <Some {...props} />;
    }
  })
})

