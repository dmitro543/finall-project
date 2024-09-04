const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

router.get('/', function (req, res) {
    res.render('WellcomePage', {
        
        name: 'WellcomePage',

        title: 'WellcomePage',
        data: {},
    })
})

router.get('/SignupPage', function (req, res) {
    res.render('SignupPage', {
        
        name: 'SignupPage',

        title: 'SignupPage',
        data: {},
    })
})

router.get('/SignupConfirmPage', function (req, res) {
    res.render('SignupConfirmPage', {
        
        name: 'SignupConfirmPage',

        title: 'SignupConfirmPage',
        data: {},
    })
})

router.get('/SigninPage', function (req, res) {
    res.render('SigninPage', {
        
        name: 'SigninPage',

        title: 'SigninPage',
        data: {},
    })
})

router.get('/RecoveryPage', function (req, res) {
    res.render('RecoveryPage', {
        
        name: 'RecoveryPage',

        title: 'RecoveryPage',
        data: {},
    })
})

router.get('/RecoveryConfirmPage', function (req, res) {
    res.render('RecoveryConfirmPage', {
        
        name: 'RecoveryConfirmPage',

        title: 'RecoveryConfirmPage',
        data: {},
    })
})

router.get('/BalancePage', function (req, res) {
    res.render('BalancePage', {
        
        name: 'BalancePage',

        title: 'BalancePage',
        data: {},
    })
})

router.get('/NotificationsPage', function (req, res) {
    res.render('NotificationsPage', {
        
        name: 'NotificationsPage',

        title: 'NotificationsPage',
        data: {},
    })
})

router.get('/SettingsPage', function (req, res) {
    res.render('SettingsPage', {
        
        name: 'SettingsPage',

        title: 'SettingsPage',
        data: {},
    })
})

router.get('/RecivePage', function (req, res) {
    res.render('RecivePage', {
        
        name: 'RecivePage',

        title: 'RecivePage',
        data: {},
    })
})

router.get('/SendPage', function (req, res) {
    res.render('SendPage', {
        
        name: 'SendPage',

        title: 'SendPage',
        data: {},
    })
})

router.get('/TransactionPage', function (req, res) {
    res.render('TransactionPage', {
        
        name: 'TransactionPage',

        title: 'TransactionPage',
        data: {},
    })
})

module.exports = router