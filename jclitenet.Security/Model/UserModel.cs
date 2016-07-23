using System.ComponentModel.DataAnnotations;

namespace jclitenet.Security.Model
{
    public class UserModel
    {
        [Required]
        [Display(Name = "UserName")]
        public string UserName { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Display(Name = "Password")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}
