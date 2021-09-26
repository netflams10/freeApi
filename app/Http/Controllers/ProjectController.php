<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditProjectRequest;
use JWTAuth;
use App\Http\Requests\ProjectRequest;
use App\Models\Project;

class ProjectController extends Controller
{

    private $project;

    public function __construct(Project $project)
    {
        $this->user = JWTAuth::parseToken()->authenticate();
        $this->project = $project;
    }

    /**
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index ()
    {
        $projects = Project::paginate(15);
        return response()->json($projects);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show ($id)
    {
        $project = $this->project->where('id', $id)->first();
        if (!$project) {
            return response()->json('Please select a valid project', 404);
        }
        return response()->json($project, 200);
    }

    /**
     * @param ProjectRequest $request
     * @param Project $project
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function create (ProjectRequest $request, Project $project)
    {
        $created = $project->create([
            'user_id' => auth()->user()->id,
            'project_name' => $request['project_name'],
            'description' => $request['description'],
            'project_awarder' => $request['project_awarder'],
            'status' => 0
        ]);

        return response()->json($created, 200);
    }

    public function edit (EditProjectRequest $request)
    {
        $project = $this->project->where('id', $request->id)
            ->where('user_id', auth()->user()->id)
            ->update(request()->all());

        if (!$project) {
            return response()->json("You don't have permission to edit this data", 403);
        }

        return response()->json("Updated Successfully", 200);
    }

    public function delete ()
    {
        return response()->json("Still have delete Logic to work on!", 200);
    }
}
