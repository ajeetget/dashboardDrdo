import React, {useState} from 'react';
import ComponentCard from '../../components/common/ComponentCard';
import Label from '../../components/form/Label';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/Select';
import TextArea from '../../components/form/input/TextArea';
import Button from '../../components/ui/button/Button';
import DatePicker from '../../components/form/date-picker';


const EditProjectForm = () => {
      const [message, setMessage] = useState("");
     const options = [
    { value: "marketing", label: "Marketing" },
    { value: "template", label: "Template" },
    { value: "development", label: "Development" },
  ];

   const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <ComponentCard title="">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
                <Label htmlFor="projectCode">Project Code</Label>
                <Input type="text" id="projectCode" name="projectCode" placeholder="Project Code" />
            </div>

            <div>
                <Label htmlFor="projectTitle">Project Title</Label>
                <Input type="text" id="projectTitle" name="projectTitle" placeholder="Project Title" />
            </div>

            <div>
                <Label htmlFor="piName">PI Name</Label>
                <Input type="text" id="piName" name="piName" placeholder="PI Name" />
            </div>

            <div>
                <Label htmlFor="scientistName">Scientist Name</Label>
                <Input type="text" id="scientistName" name="scientistName" placeholder="Scientist Name" />
            </div>

            <div>
                <Label htmlFor="inputTwo">Start Date</Label>
                <DatePicker id="inputTwo" />
            </div>

            <div>
                <Label htmlFor="inputTwo">End Date</Label>
                <DatePicker id="inputTwo" />
            </div>

            <div>
                <Label htmlFor="totalBudgetApproved">Total Budget Approved</Label>
                <Input type="text" id="totalBudgetApproved" name="totalBudgetApproved" placeholder="Total Budget Approved" />
            </div>

            <div>
                <Label htmlFor="expenditures">Expenditures </Label>
                <Input type="text" id="expenditures" name="expenditures" placeholder="Expenditures" />
            </div>

            <div>
                <Label>Status</Label>
                <Select
                    options={options}
                    onChange={handleSelectChange}
                    placeholder="Select an option"
                    className="dark:bg-dark-900"
                />               
            </div>

            <div>
                <Label htmlFor="reviewRemarks">Review Remarks</Label>
                <Input type="text" id="reviewRemarks" name="reviewRemarks" placeholder="Review Remarks" />
            </div>

            <div>
                <Label>Project Sumary</Label>
                <TextArea
                    value={message}
                    onChange={(value) => setMessage(value)}
                    rows={4}/>
            </div>            
        </div>
        <div className="flex items-center justify-center">           
            <Button size="lg" variant="primary">
              Edit Project
            </Button>
        </div>
      </ComponentCard>
    </div>
  )
}

export default EditProjectForm
