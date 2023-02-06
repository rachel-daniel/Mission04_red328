using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Mission04_red328.Models
{
    public class GradeCalculatorModel
    {
        // getter, setter, and validation for Assignments
        [Range(0, 100, ErrorMessage = "Assignments percentage must be between 0 and 100")]
        public int Assignments { get; set; }

        // getter, setter, and validation for Group Project
        [Range(0, 100, ErrorMessage = "Group project percentage must be between 0 and 100")]
        public int Project { get; set; }

        // getter, setter, and validation for Quizzes
        [Range(0, 100, ErrorMessage = "Quizzes percentage must be between 0 and 100")]
        public int Quizzes { get; set; }

        // getter, setter, and validation for Midterm
        [Range(0, 100, ErrorMessage = "Midterm percentage must be between 0 and 100")]
        public int Midterm { get; set; }

        // getter, setter, and validation for Final
        [Range(0, 100, ErrorMessage = "Final Exam percentage must be between 0 and 100")]
        public int Final { get; set; }

        // getter, setter, and validation for Intex
        [Range(0, 100, ErrorMessage = "INTEX grade percentage must be between 0 and 100")]
        public int Intex { get; set; }

    }
}
