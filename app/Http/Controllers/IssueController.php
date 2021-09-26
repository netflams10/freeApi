<?php

namespace App\Http\Controllers;

use App\Http\Requests\IssueStoreRequest;
use App\Http\Requests\IssueUpdateRequest;
use JWTAuth;
use App\Models\Issue;
use App\Models\Project;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\DocBlock\Tags\Author;

class IssueController extends Controller
{
    private $project;
    private $issue;

    /**
     * IssueController constructor.
     * @param Project $project
     * @param Issue $issue
     */
    public function __construct(Project $project, Issue $issue)
    {
        $this->user = JWTAuth::parseToken()->authenticate();
        $this->project = $project;
        $this->issue = $issue;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(IssueStoreRequest $request)
    {
        // enum not present in sqlite
        $issue = $this->issue->create([
            'project_id' => $request->project_id,
            'title' => $request->title,
            'description' => $request->description,
            'assign_user_id' => auth()->user()->id
        ]);

        return response()->json($issue, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $issue = $this->issue
            ->where('id', $id)->with('project')
            ->with('issue_status')->first();

        return response()->json($issue, 200);
    }

    /**
     * Update the specified resource in storage.
     * @param IssueUpdateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(IssueUpdateRequest $request)
    {
        $update = $this->issue->where('id', $request->id)->update(request()->all());
        if (!$update) {
            return response()->json("You cannot update this Issue!", 200);
        }
        return response()->json("Updated",200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        $data = $this->issue->where('id', $id)->first()->delete();

        if (!$data) {
            return response()->json("User can't delete this Issue!", 403);
        }

        return response()->json("Issue Deleted!", 200);
    }
}
