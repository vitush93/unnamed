<?php

namespace App\Presenters;


use App\Model\ItemManager;
use App\Model\ItemManagerException;

class HomepagePresenter extends BasePresenter
{
    /** @var ItemManager @inject */
    public $itemManager;

    function actionDefault()
    {
        if (!$this->request->isMethod('POST')) $this->sendJson(['success' => false, 'error' => 'Invalid method ' . $this->request->getMethod()]);

        $response = $this->getHttpResponse();
        $response->addHeader('Access-Control-Allow-Origin', '*');

        $url = $this->request->getPost('url');
        $title = $this->request->getPost('title');
        $tags = $this->request->getPost('tags');

        try {
            $this->itemManager->create($url, $title, $tags);

            $this->sendJson([
                'success' => true
            ]);
        } catch (ItemManagerException $e) {
            $this->sendJson([
                'success' => false,
                'error' => $e->getMessage()
            ]);
        }
    }
}
