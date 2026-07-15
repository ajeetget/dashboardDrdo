import ComponentCard from '../../components/common/ComponentCard';
import Label from '../../components/form/Label';
import Input from '../../components/form/input/InputField';
import Select from '../../components/form/Select';
//import TextArea from '../../components/form/input/TextArea';
import Button from '../../components/ui/button/Button';
import DatePicker from '../../components/form/date-picker';


const EditProjectForm = () => {
     
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
                <Label htmlFor="researchVerticalCode">Research Vertical Code</Label>
                <Input type="text" id="researchVerticalCode" name="researchVerticalCode" placeholder="Project Code" />
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
                <Label htmlFor="stakeholdingLab">Stakeholding Lab</Label>
                <Input type="text" id="stakeholdingLab" name="stakeholdingLab" placeholder="Stakeholding Lab" />
            </div>

            <div>
                <Label htmlFor="budget">Budget</Label>
                <Input type="text" id="budget" name="budget" placeholder="Budget" />
            </div>

            <div>
                <Label htmlFor="initialProjectReceivedDate">initial Project Received Date</Label>
                <DatePicker id="initialProjectReceivedDate" />
            </div>

            <div>
                <Label htmlFor="sanctionDate">Sanction Date</Label>
                <DatePicker id="sanctionDate"  />
            </div>

            <div>
                <Label htmlFor="originalPdc">Original Pdc</Label>
                <Input type="text" id="originalPdc" name="originalPdc" placeholder="Original Pdc" />
            </div>

            <div>
                <Label htmlFor="revisedPdc">Revised Pdc </Label>
                <Input type="text" id="revisedPdc" name="revisedPdc" placeholder="Revised Pdc" />
            </div>

            <div>
                <Label htmlFor="presentStatus">Present Status</Label>
                <Select
                    options={options}
                    onChange={handleSelectChange}
                    placeholder="Select an option"
                    className="dark:bg-dark-900"
                />               
            </div>

            <div>
                <Label htmlFor="tec">tec</Label>
                <Input type="text" id="tec" name="tec" placeholder="tec" />
            </div>

            <div>
                <Label htmlFor="gcApproval">gcApproval</Label>
                <Input type="text" id="gcApproval" name="gcApproval" placeholder="gcApproval" />
            </div>

            

            <div>
                <Label htmlFor="financiallyClosed">financiallyClosed</Label>
                <Input type="text" id="financiallyClosed" name="financiallyClosed" placeholder="financiallyClosed" />
            </div>

            <div>
                <Label htmlFor="labRecommendation">labRecommendation</Label>
                <Input type="text" id="labRecommendation" name="labRecommendation" placeholder="labRecommendation" />
            </div>

            <div>
                <Label htmlFor="technicallyClosed">technicallyClosed</Label>
                <Input type="text" id="technicallyClosed" name="technicallyClosed" placeholder="technicallyClosed" />
            </div>

            <div>
                <Label htmlFor="administrativeStatus">administrativeStatus</Label>
                <Input type="text" id="administrativeStatus" name="administrativeStatus" placeholder="administrativeStatus" />
            </div>

            <div>
                <Label htmlFor="piPhone">piPhone</Label>
                <Input type="text" id="piPhone" name="piPhone" placeholder="piPhone" />
            </div>

            <div>
                <Label htmlFor="piEmail">piEmail</Label>
                <Input type="text" id="piEmail" name="piEmail" placeholder="piEmail" />
            </div>

            <div>
                <Label htmlFor="lastTec">lastTec</Label>
                <Input type="text" id="lastTec" name="lastTec" placeholder="lastTec" />
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


