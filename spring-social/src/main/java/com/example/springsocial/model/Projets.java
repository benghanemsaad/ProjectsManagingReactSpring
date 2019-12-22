/***********************************************************************
 * Module:  Projets.java
 * Author:  hp
 * Purpose: Defines the Class Projets
 ***********************************************************************/

import java.util.*;

/** @pdOid be6d3c6c-e3a6-4b56-ae0c-70e15aae96b7 */
public class Projets {
   /** @pdOid e1cd1856-d323-46d3-8fbe-1cee6679877d */
   public int idProjet;
   /** @pdOid a87ff388-5e53-4f88-8e1d-9a4d51216d2d */
   public java.lang.String description;
   /** @pdOid e8a68683-5f75-4efb-8ee0-f944f133c3bf */
   public java.lang.String objectif;
   /** @pdOid b2146516-daf8-4c72-b3b4-2c41d66ed4b0 */
   public int duree;
   /** @pdOid 917accf1-b415-44f4-b9e4-92eb9e897432 */
   public float budget;
   
   /** @pdRoleInfo migr=no name=Employers assc=soulever mult=1..1 */
   public Employers employers;
   /** @pdRoleInfo migr=no name=Taches assc=contenir coll=java.util.List impl=java.util.ArrayList mult=1..* side=A */
   public java.util.List<Taches> taches;
   
   
   /** @pdGenerated default parent getter */
   public Employers getEmployers() {
      return employers;
   }
   
   /** @pdGenerated default parent setter
     * @param newEmployers */
   public void setEmployers(Employers newEmployers) {
      if (this.employers == null || !this.employers.equals(newEmployers))
      {
         if (this.employers != null)
         {
            Employers oldEmployers = this.employers;
            this.employers = null;
            oldEmployers.removeProjets(this);
         }
         if (newEmployers != null)
         {
            this.employers = newEmployers;
            this.employers.addProjets(this);
         }
      }
   }
   /** @pdGenerated default getter */
   public java.util.List<Taches> getTaches() {
      if (taches == null)
         taches = new java.util.ArrayList<Taches>();
      return taches;
   }
   
   /** @pdGenerated default iterator getter */
   public java.util.Iterator getIteratorTaches() {
      if (taches == null)
         taches = new java.util.ArrayList<Taches>();
      return taches.iterator();
   }
   
   /** @pdGenerated default setter
     * @param newTaches */
   public void setTaches(java.util.List<Taches> newTaches) {
      removeAllTaches();
      for (java.util.Iterator iter = newTaches.iterator(); iter.hasNext();)
         addTaches((Taches)iter.next());
   }
   
   /** @pdGenerated default add
     * @param newTaches */
   public void addTaches(Taches newTaches) {
      if (newTaches == null)
         return;
      if (this.taches == null)
         this.taches = new java.util.ArrayList<Taches>();
      if (!this.taches.contains(newTaches))
      {
         this.taches.add(newTaches);
         newTaches.setProjets(this);      
      }
   }
   
   /** @pdGenerated default remove
     * @param oldTaches */
   public void removeTaches(Taches oldTaches) {
      if (oldTaches == null)
         return;
      if (this.taches != null)
         if (this.taches.contains(oldTaches))
         {
            this.taches.remove(oldTaches);
            oldTaches.setProjets((Projets)null);
         }
   }
   
   /** @pdGenerated default removeAll */
   public void removeAllTaches() {
      if (taches != null)
      {
         Taches oldTaches;
         for (java.util.Iterator iter = getIteratorTaches(); iter.hasNext();)
         {
            oldTaches = (Taches)iter.next();
            iter.remove();
            oldTaches.setProjets((Projets)null);
         }
      }
   }

}