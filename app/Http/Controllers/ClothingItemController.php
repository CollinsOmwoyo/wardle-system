<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClothingItem;
use Illuminate\Support\Facades\Auth;

class ClothingItemController extends Controller
{
    public function index()
    {
        return ClothingItem::where('user_id', Auth::id())->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'category' => 'required|string',
            'image' => 'nullable|string'
        ]);

        return ClothingItem::create([
            'name' => $request->name,
            'category' => $request->category,
            'image' => $request->image,
            'user_id' => Auth::id(),
        ]);
    }

    public function update(Request $request, ClothingItem $clothingItem)
    {
        if ($clothingItem->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $request->validate([
            'name' => 'required|string',
            'category' => 'required|string',
            'image' => 'nullable|string'
        ]);

        $clothingItem->update($request->all());

        return response()->json(['message' => 'Item updated']);
    }

    public function destroy(ClothingItem $clothingItem)
    {
        if ($clothingItem->user_id !== Auth::id()) {
            return response()->json(['error' => 'Unauthorized'], 403);
        }

        $clothingItem->delete();

        return response()->json(['message' => 'Item deleted']);
    }
}
