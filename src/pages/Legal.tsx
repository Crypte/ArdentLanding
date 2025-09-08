import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Legal() {
  return (
    <div className="min-h-screen bg-background">
      <div className="space-y-8 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-2">Informations légales</h1>
        <p className="text-muted-foreground">
          Consultez nos conditions d'utilisation, notre politique de confidentialité et nos mentions légales
        </p>
      </div>

      <Tabs defaultValue="terms" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="terms">
            <span className="hidden sm:inline">Conditions d'utilisation</span>
            <span className="sm:hidden">Conditions</span>
          </TabsTrigger>
          <TabsTrigger value="legal-info">
            <span className="hidden sm:inline">Informations légales</span>
            <span className="sm:hidden">Infos légales</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="terms" className="space-y-6">
          <div className="prose">
              <section>
            <h2>Conditions d'utilisation</h2>
            
            <h3>1. Acceptation des conditions</h3>
            <p>
              En utilisant l'application Ardent, vous acceptez d'être lié par ces conditions d'utilisation. 
              Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
            </p>

            <h3>2. Description du service</h3>
            <p>
              Ardent est une plateforme éducative qui permet aux utilisateurs d'accéder à des ressources 
              pédagogiques et de suivre leur progression d'apprentissage.
            </p>

            <h3>3. Compte utilisateur</h3>
            <p>
              Pour utiliser certaines fonctionnalités, vous devez créer un compte. Vous êtes responsable 
              de maintenir la confidentialité de vos identifiants de connexion.
            </p>

            <h3>4. Utilisation acceptable</h3>
            <p>Vous vous engagez à :</p>
            <ul>
              <li>Utiliser le service de manière légale et éthique</li>
              <li>Ne pas partager de contenu inapproprié ou offensant</li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas tenter de compromettre la sécurité du système</li>
            </ul>

            <h3>5. Limitation de responsabilité</h3>
            <p>
              Ardent est fourni "en l'état" sans garantie d'aucune sorte. Nous ne sommes pas responsables 
              des dommages directs ou indirects résultant de l'utilisation du service.
            </p>

            <h3>6. Modifications des conditions</h3>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs 
              seront informés des changements importants.
            </p>
              </section>
          </div>
        </TabsContent>

        <TabsContent value="legal-info" className="space-y-6">
          <div className="prose">
            {/* Mentions légales */}
            <section>
              <h2>Mentions légales</h2>
              
              <h3>Éditeur du site</h3>
              <p>
                <strong>Raison sociale :</strong> Ardent Education<br/>
                <strong>Forme juridique :</strong> SAS<br/>
                <strong>Capital social :</strong> 10 000 €<br/>
                <strong>Siège social :</strong> 123 Rue de l'Innovation, 75001 Paris, France<br/>
                <strong>RCS :</strong> Paris B 123 456 789<br/>
                <strong>SIRET :</strong> 12345678901234<br/>
                <strong>TVA intracommunautaire :</strong> FR12345678901
              </p>

              <h3>Directeur de la publication</h3>
              <p>
                <strong>Nom :</strong> Jean Dupont<br/>
                <strong>Fonction :</strong> Président<br/>
                <strong>Email :</strong> contact@ardent-app.com
              </p>

              <h3>Hébergement</h3>
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.<br/>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br/>
                <strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
              </p>

              <h3>Propriété intellectuelle</h3>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur 
                et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour 
                les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>

              <h3>Données personnelles</h3>
              <p>
                Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement 
                Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, 
                de suppression et d'opposition aux données personnelles vous concernant.
              </p>

              <h3>Cookies</h3>
              <p>
                Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à 
                utiliser ce site, vous acceptez notre utilisation des cookies conformément à notre politique 
                de confidentialité.
              </p>

              <h3>Droit applicable</h3>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, 
                les tribunaux français seront seuls compétents.
              </p>
            </section>

              {/* Politique de confidentialité */}
              <section>
                  <h2>Politique de confidentialité</h2>

                  <h3>1. Collecte des données</h3>
                  <p>Nous collectons les types de données suivants :</p>
                  <ul>
                      <li><strong>Données personnelles :</strong> nom, adresse e-mail lors de l'inscription</li>
                      <li><strong>Données d'utilisation :</strong> progression, préférences, temps d'utilisation</li>
                      <li><strong>Données techniques :</strong> adresse IP, type de navigateur, système d'exploitation</li>
                  </ul>

                  <h3>2. Utilisation des données</h3>
                  <p>Vos données sont utilisées pour :</p>
                  <ul>
                      <li>Fournir et améliorer nos services</li>
                      <li>Personnaliser votre expérience d'apprentissage</li>
                      <li>Communiquer avec vous concernant votre compte</li>
                      <li>Analyser l'utilisation de la plateforme</li>
                  </ul>

                  <h3>3. Partage des données</h3>
                  <p>
                      Nous ne vendons ni ne louons vos données personnelles à des tiers. Nous pouvons partager
                      vos informations dans les cas suivants :
                  </p>
                  <ul>
                      <li>Avec votre consentement explicite</li>
                      <li>Pour se conformer aux obligations légales</li>
                      <li>Avec nos prestataires de services sous contrat de confidentialité</li>
                  </ul>

                  <h3>4. Sécurité des données</h3>
                  <p>
                      Nous mettons en place des mesures de sécurité techniques et organisationnelles appropriées
                      pour protéger vos données contre l'accès non autorisé, la modification, la divulgation ou la destruction.
                  </p>

                  <h3>5. Vos droits</h3>
                  <p>Conformément au RGPD, vous avez le droit de :</p>
                  <ul>
                      <li>Accéder à vos données personnelles</li>
                      <li>Rectifier les données inexactes</li>
                      <li>Supprimer vos données</li>
                      <li>Limiter le traitement</li>
                      <li>Portabilité des données</li>
                      <li>Vous opposer au traitement</li>
                  </ul>

                  <h3>6. Contact</h3>
                  <p>
                      Pour exercer vos droits ou pour toute question concernant cette politique,
                      contactez-nous à : contact@ardent-projet.fr
                  </p>
              </section>
          </div>
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}