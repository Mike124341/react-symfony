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
    //haal en sla direct de repository op
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

        #Decode de data van react component
        $data = json_decode($request->getContent());

        #Maak een object aan 
        $formData = new FormData();
        $formData->setVoornaam($data->fname);
        $formData->setAchternaam($data->lname);

        //Laat Doctrine weten dat je van plan bent om het object opteslaan
        $entityManager->persist($formData);

        // Sla het object op
        $entityManager->flush();

        return new response('Gebruiker toegevoegd');
    }

    #[Route('/read', name: 'crud_read')]
    /** 
    *@param Request $request
    */ 
    public function read(Request $request): Response {

        #Haal alle data van de repository op
        $allFormData = $this->formDataRepository->findAll();

        #Stuur alle data op in json
        return $this->json($allFormData);
    }

    #[Route('/update', name: 'crud_update')]
    /** 
    *@param Request $request
    */ 
    public function update(Request $request ): Response {

        $em = $this->getDoctrine()->getManager();

        #Haal alle data op van react
        $data = json_decode($request->getContent());

        #Vind de gegevens via ID
        $targetUser = $this->formDataRepository->find($data->Up_id);

        #Als er geen gegevens zijn gevonden die bij het ID horen
        if (!$targetUser) {
            return new Response('Geen gebruiker geveonden');
        }

        #Verander de gegevens
        $targetUser->setVoornaam($data->UP_fname);
        $targetUser->setAchternaam($data->UP_lname);

        #Voor de query's hier boven uit 
        $em->flush();

        return new Response('Gebruiker Gegevens Veranderd!');
    }

    #[Route('/delete', name: 'crud_delete')]
    /** 
    *@param Request $request
    */ 
    public function delete(Request $request ): Response {
        $em = $this->getDoctrine()->getManager();

        #Haal alle data op van react app
        $data = json_decode($request->getContent());

        #Vind de gegevens via ID
        $targetUser = $this->formDataRepository->find($data->id);

        #Als er geen matchende gegevens zijn
        if (!$targetUser) {
            return new Response('Geen gebruiker geveonden');
        }

        #Verwijder de gegevens
        $em->remove($targetUser);
        $em->flush();

        return new Response('Gebruiker Verwijderd!');
    }

}
