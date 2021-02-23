<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\FormDataRepository;
use App\Entity\FormData;

// Zet de route hier voor prefix van de klasse
#[Route('/api', name: 'crud')]

class CrudController extends AbstractController
{
    private $formDataRepository;

    public function __construct(FormDataRepository $formDataRepository)   {
        $this->formDataRepository = $formDataRepository;
    }


    #[Route('/create', name: 'crud_create')]
    /** 
    *@param Request $request
    */ 
    public function create(Request $request): Response {
        $entityManager = $this->getDoctrine()->getManager();
        $data = json_decode($request->getContent());

        $formData = new FormData();
        $formData->setVoornaam($data->fname);
        $formData->setAchternaam($data->lname);

        //Laat Doctrine weten dat je van plan bent om het object opteslaan
        $entityManager->persist($formData);

        // Sla het object op
        $entityManager->flush();

        return new response(dd($formData));
    }

    #[Route('/read', name: 'crud_read')]
    /** 
    *@param Request $request
    */ 
    public function read(Request $request): Response {

        $allFormData = $this->formDataRepository->findAll();

        return $this->json($allFormData);
    }

    #[Route('/delete', name: 'crud_delete')]
    /** 
    *@param Request $request
    */ 
    public function delete(Request $request): Response {

        $data = json_decode($request->getContent());

        $entityManager = $this->getDoctrine()->getManager();
        $a = $entityManager->getRepository(FormData::class)->find($data->id);


        if (!$a) {
            return 'nee';
        }

        return $this->json($a);
    }

}
