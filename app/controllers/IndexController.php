<?php
use Phalcon\Mvc\View,
    Phalcon\Mvc\Controller;

class IndexController extends ControllerBase{

    public function indexAction(){

    }

    public function portfolioAction(){
        $this->view->setRenderLevel(View::LEVEL_ACTION_VIEW);
    }
}
