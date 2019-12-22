/***********************************************************************
 * Module:  Services.java
 * Author:  hp
 * Purpose: Defines the Class Services
 ***********************************************************************/

import java.util.*;

/** @pdOid 567d29af-ddb7-495f-a75a-659686ffad0a */
public class Services {
   /** @pdOid 750dc859-a9ff-404b-b2fb-17bdd16d0f6f */
   public int idService;
   /** @pdOid 709436cd-5fb7-4bfa-8f89-d50b90fa3075 */
   public java.lang.String nomService;
   
   /** @pdRoleInfo migr=no name=Employers assc=atacher coll=java.util.List impl=java.util.ArrayList mult=1..* side=A */
   public java.util.List<Employers> employers;
   
   
   /** @pdGenerated default getter */
   public java.util.List<Employers> getEmployers() {
      if (employers == null)
         employers = new java.util.ArrayList<Employers>();
      return employers;
   }
   
   /** @pdGenerated default iterator getter */
   public java.util.Iterator getIteratorEmployers() {
      if (employers == null)
         employers = new java.util.ArrayList<Employers>();
      return employers.iterator();
   }
   
   /** @pdGenerated default setter
     * @param newEmployers */
   public void setEmployers(java.util.List<Employers> newEmployers) {
      removeAllEmployers();
      for (java.util.Iterator iter = newEmployers.iterator(); iter.hasNext();)
         addEmployers((Employers)iter.next());
   }
   
   /** @pdGenerated default add
     * @param newEmployers */
   public void addEmployers(Employers newEmployers) {
      if (newEmployers == null)
         return;
      if (this.employers == null)
         this.employers = new java.util.ArrayList<Employers>();
      if (!this.employers.contains(newEmployers))
      {
         this.employers.add(newEmployers);
         newEmployers.setServices(this);      
      }
   }
   
   /** @pdGenerated default remove
     * @param oldEmployers */
   public void removeEmployers(Employers oldEmployers) {
      if (oldEmployers == null)
         return;
      if (this.employers != null)
         if (this.employers.contains(oldEmployers))
         {
            this.employers.remove(oldEmployers);
            oldEmployers.setServices((Services)null);
         }
   }
   
   /** @pdGenerated default removeAll */
   public void removeAllEmployers() {
      if (employers != null)
      {
         Employers oldEmployers;
         for (java.util.Iterator iter = getIteratorEmployers(); iter.hasNext();)
         {
            oldEmployers = (Employers)iter.next();
            iter.remove();
            oldEmployers.setServices((Services)null);
         }
      }
   }

}