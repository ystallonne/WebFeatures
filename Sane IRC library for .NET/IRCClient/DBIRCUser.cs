//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IRCClient
{
    using System;
    using System.Collections.Generic;
    
    public partial class DBIRCUser
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DBIRCUser()
        {
            this.DBIRCMessages = new HashSet<DBIRCMessage>();
        }
    
        public int Id { get; set; }
        public string Nick { get; set; }
        public int DBIRCServersId { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<DBIRCMessage> DBIRCMessages { get; set; }
        public virtual DBIRCServer DBIRCServer { get; set; }
    }
}
