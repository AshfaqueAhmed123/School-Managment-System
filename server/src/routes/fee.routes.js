import express from 'express';

const router = express.Router();

router.route('/fees').post();

router.route('/fees').get();

router.route('/fees/:id').get();

router.route('/fees/:id').patch();

router.route('/fees/:id').delete();

router.route('/fees/student/:studentId').get();


router.route('/fees/:id/remaining-amount').patch();

export default router;
