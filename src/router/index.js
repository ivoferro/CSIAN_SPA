import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/components/Full'
import { PostDetailed, PostCreation, PostsCollection } from '@/components/posts'
import { NotFound } from '@/components/errors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Full',
      component: Full,
      children: [
        {
          path: '',
          name: 'PostsCollection',
          component: PostsCollection
        },
        {
          path: 'post/new',
          name: 'PostCreation',
          component: PostCreation
        },
        {
          path: 'post/:id',
          name: 'PostDetailed',
          component: PostDetailed
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    }
  ]
})
