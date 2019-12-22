/***********************************************************************
 * Module:  Employers.java
 * Author:  hp
 * Purpose: Defines the Class Employers
 ***********************************************************************/

import java.util.*;

/** @pdOid e53a4a4a-9259-4895-8c7c-8d9d03eb476f */
public class Employers {
   /** @pdOid ebd9ad5c-0786-448f-8771-bb7350237745 */
   public int idEmp;
   /** @pdOid c1197967-2c27-43d2-ad1c-fa2f7d9b7ad7 */
   public java.lang.String matricule;
   /** @pdOid ea1ac074-3e29-4a13-86d3-e0d37cc37510 */
   public java.lang.String nom;
   /** @pdOid d2ecfc37-af55-4263-b065-af8785731065 */
   public java.lang.String prenom;
   /** @pdOid df13b0bb-ae7d-4df5-ac79-4f7e993cc146 */
   public java.lang.String tel;
   /** @pdOid 0151c285-857f-4e91-8a40-29d320c8bbf8 */
   public java.lang.String email;
   /** @pdOid 88b423dc-9cf8-40d2-a936-4bb7b64346b8 */
   public java.lang.String adresse;
   /** @pdOid eae902d8-8436-4bcb-b95b-032e7b99b4b4 */
   public java.lang.String passwoed;
   /** @pdOid 6effcfae-0346-4a74-ade6-5981da738eca */
   public java.lang.String role;
   
   /** @pdRoleInfo migr=no name=Services assc=atacher mult=1..1 */
   public Services services;
   /** @pdRoleInfo migr=no name=Projets assc=soulever coll=java.util.List impl=java.util.ArrayList mult=0..* side=A */
   public java.util.List<Projets> projets;
   
   
   /** @pdGenerated default parent getter */
   public Services getServices() {
      return services;
   }
   
   /** @pdGenerated default parent setter
     * @param newServices */
   public void setServices(Services newServices) {
      if (this.services == null || !this.services.equals(newServices))
      {
         if (this.services != null)
         {
            Services oldServices = this.services;
            this.services = null;
            oldServices.removeEmployers(this);
         }
         if (newServices != null)
         {
            this.services = newServices;
            this.services.addEmployers(this);
         }
      }
   }
   /** @pdGenerated default getter */
   public java.util.List<Projets> getProjets() {
      if (projets == null)
         projets = new java.util.ArrayList<Projets>();
      return projets;
   }
   
   /** @pdGenerated default iterator getter */
   public java.util.Iterator getIteratorProjets() {
      if (projets == null)
         projets = new java.util.ArrayList<Projets>();
      return projets.iterator();
   }
   
   /** @pdGenerated default setter
     * @param newProjets */
   public void setProjets(java.util.List<Projets> newProjets) {
      removeAllProjets();
      for (java.util.Iterator iter = newProjets.iterator(); iter.hasNext();)
         addProjets((Projets)iter.next());
   }
   
   /** @pdGenerated default add
     * @param newProjets */
   public void addProjets(Projets newProjets) {
      if (newProjets == null)
         return;
      if (this.projets == null)
         this.projets = new java.util.ArrayList<Projets>();
      if (!this.projets.contains(newProjets))
      {
         this.projets.add(newProjets);
         newProjets.setEmployers(this);      
      }
   }
   
   /** @pdGenerated default remove
     * @param oldProjets */
   public void removeProjets(Projets oldProjets) {
      if (oldProjets == null)
         return;
      if (this.projets != null)
         if (this.projets.contains(oldProjets))
         {
            this.projets.remove(oldProjets);
            oldProjets.setEmployers((Employers)null);
         }
   }
   
   /** @pdGenerated default removeAll */
   public void removeAllProjets() {
      if (projets != null)
      {
         Projets oldProjets;
         for (java.util.Iterator iter = getIteratorProjets(); iter.hasNext();)
         {
            oldProjets = (Projets)iter.next();
            iter.remove();
            oldProjets.setEmployers((Employers)null);
         }
      }
   }

}