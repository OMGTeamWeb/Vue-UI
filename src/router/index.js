import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Pages/Login'
import Signup from '@/components/Pages/Signup'
import Task from '@/components/Tasks/Task'
import Reports from '@/components/Reports/Reports'
import AdminReports from '@/components/AdminReports/AdminReports'
import Habits from '@/components/Habits/Habits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/adminreports',
      name: 'AdminReports',
      component: AdminReports
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Task
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/habits',
      name: 'Habits',
      component: Habits
    }
  ]
})
