export default {
  menus: [
    {
      icon: 'pie-chart', title: '订单管理', index: 'order', 
      children: [
        { title: '采购订单管理', index: '/purchase', component: 'Purchase' },
        { title: '运输需求管理', index: '/demand', component: 'Demand' },
        { title: '竞价大厅', index: '/hall', component: 'Hall' },
        { title: '承运单管理', index: '/carrier', component: 'Carrier' },
        { title: '订单列表', index: '/list', component: 'List' }
      ]
    },
    {
      icon: 'desktop', title: '物流管理', index: 'logistics',
      children: [
        { title: '配送单管理', index: '/delivery' },
        { title: '运单管理', index: '/waybill' },
        { title: '物流企业管理', index: '/logicompany' },
        { title: '车辆司机管理', index: '/vehicledriver' },
        { title: '车型车长', index: '/vehicletype' }
      ]
    },
    {
      icon: 'desktop', title: '结算管理', index: 'settle',
      children: [
        { title: '应收对账单', index: '/receivebill' },
        { title: '应付对账单', index: '/handlebill' },
        { title: '应付费用确认', index: '/paycost' },
        { title: '发票管理', index: '/invoice' }
      ]
    },
    {
      icon: 'desktop', title: '运营管理', index: 'operate',
      children: [
        { title: '项目管理', index: '/project' },
        { title: 'BANNER管理', index: '/banner' },
        { title: '快讯管理', index: '/newsletter' },
        { title: '个人管理', index: '/personal' },
        { title: '企业管理', index: '/enterprise' }
      ]
    },
    {
      icon: 'desktop', title: '系统管理', index: 'system',
      children: [
        { title: '用户管理', index: '/usermanage' },
        { title: '角色管理', index: '/rolemanage' },
        { title: '物料管理', index: '/material' },
        { title: '企业服务配置', index: '/service' }
      ]
    },
    {
      icon: 'desktop', title: 'APP管理', index: 'app',
      children: [
        { title: 'APP更新包', index: '/updatepackage' },
        { title: 'APP路由表', index: '/routerlist' }
      ]
    },
    {
      icon: 'desktop', title: '硬件管理', index: 'hardware',
      children: [
        { title: '订单管理', index: '/hardwarebill' },
        { title: '品牌管理', index: '/brandmanage' }
      ]
    },
    {
      icon: 'desktop', title: '智能地磅', index: 'loadmeter',
      children: [
        { title: '称重计划', index: '/weightplan' },
        { title: '称重记录', index: '/weightlog' },
        { title: '设备管理', index: '/devicemanage' },
        { title: '地磅配置', index: '/loadmeterconfig' },
        { title: '安装地点', index: '/loadmeterlocation' }
      ]
    },
    {
      icon: 'desktop', title: '官网管理', index: 'hwariotpage',
      children: [
        { title: '新闻管理', index: '/news' },
        { title: '商务洽谈', index: '/negotiation' },
        { title: '合作伙伴', index: '/partners' }
      ]
    } 
  ]
}