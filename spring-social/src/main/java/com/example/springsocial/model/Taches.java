/***********************************************************************
 * Module:  Taches.java
 * Author:  hp
 * Purpose: Defines the Class Taches
 ***********************************************************************/

import java.util.*;

/** @pdOid bd185495-898e-452c-a670-1a8b678ef8a2 */
public class Taches {
   /** @pdOid f02ab62f-5b13-4350-b4b1-eefa1b624fb4 */
   public int numero;
   /** @pdOid f41bd91c-ae0e-476b-babb-b39ab200b998 */
   public java.util.Date dateFinale;
   /** @pdOid 271d31df-5eee-4307-a34d-85cec9ea785a */
   public int dureeTache;
   /** @pdOid a55f0d3b-64c2-49fd-a8fa-d06f63d55bb2 */
   public java.lang.String etat;
   /** @pdOid 2b473836-5525-4bf6-9465-18f5b4505382 */
   public java.lang.String commentaire;
   
   /** @pdRoleInfo migr=no name=Projets assc=contenir mult=1..1 */
   public Projets projets;
   
   
   /** @pdGenerated default parent getter */
   public Projets getProjets() {
      return projets;
   }
   
   /** @pdGenerated default parent setter
     * @param newProjets */
   public void setProjets(Projets newProjets) {
      if (this.projets == null || !this.projets.equals(newProjets))
      {
         if (this.projets != null)
         {
            Projets oldProjets = this.projets;
            this.projets = null;
            oldProjets.removeTaches(this);
         }
         if (newProjets != null)
         {
            this.projets = newProjets;
            this.projets.addTaches(this);
         }
      }
   }

}